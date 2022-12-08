import React from 'react';


/**
 *  Context 一个全局 Theme 熟悉，需要传递：App->Toolbar->ThemedButton->Button，
 * 中间若干层不需要 theme，但仍需要编写传递 theme 的代码，解决办法：Context
 */

/**
 * 使用 Context 三步：
 * 1. 创建 CContext = React.createContext(defaultValue: any)
 * 2. 将要使用 context 的组件用 <CContext.Provider value={value}> </CContext.Provider> 包裹
 * 3.1 将 CContext import 到需要使用该 context 的 class组件，
 *    设置 static contextType = CContext，或直接 class.contextType = CContext
 * 即可用 this.context 访问 context
 *    
 */

// const ThemeContext = React.createContext('light');
// ThemeContext.displayName = "ThemedContext";

// class App extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value='dark'>
//         <Toolbar />
//       </ThemeContext.Provider>
//     )
//   }
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// // class ThemedButton extends React.Component {

// //   // 指定 contextType 读取当前的 theme context。
// //   static contextType = ThemeContext;
// //   render() {
// //     return <button>{this.context as string}</button>
// //   }
// // }

// /**
//  * 3.2 应用于函数式组件：<CContext.Consumer>{value => <JSX>}</CContext.Consumer>
//  */
// const ThemedButton: React.FC = () => {
//   return (
//     <ThemeContext.Consumer>
//       {value => (<button>{value}</button>)}
//     </ThemeContext.Consumer>
//   )
// }

/**
 * 如果仅仅想省去中间若干层组件传递数据的代码，也可以使用 组件组合，控制反转
 */

/**
 * Context 的传递，是一种广播
 * 使用 context 的通用的场景包括管理当前的 locale，theme，或者一些缓存数据，这比替代方案要简单的多。
 */

/**
 * 当 Provider 的 value 值发生变化时，它内部的所有消费组件都会重新渲染！！！
 * Provider 及其内部 consumer 组件都不受制于 shouldComponentUpdate 函数，
 * 因此当 consumer 组件在其祖先组件退出更新的情况下也能更新。
 * 
 * 新旧 value 的对比，类似 Object.is()
 */


/**
 * 完整案例：Context 可以传递数据，也可以传递函数
 */
// theme-context.ts
interface ITheme {
  foreground: string;
  background: string
}
export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = React.createContext<ITheme>(themes.dark);

// themed-button.ts
class ThemedButton extends React.Component<any, any> {
  static contextType = ThemeContext;
  context!: React.ContextType<typeof ThemeContext>; // ts 3.7之前的做法，3.7之后加 declare，需要调整 cra preset 插件顺序

  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{ backgroundColor: theme.background }}
      />
    );
  }
}

function Toolbar(props: any) {
  return (
    <ThemedButton onClick={props.changeTheme}>
      Change Theme
    </ThemedButton>
  );
}

interface AppState {
  theme: ITheme;
}
class App extends React.Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      theme: themes.light,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState(state => ({
      theme: state.theme === themes.dark
        ? themes.light
        : themes.dark,
    }));
  };

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        {/* <Section> */}
        <ThemedButton />
        {/* </Section> */}
      </>
    );
  }
}

/**
 * 子组件同时消费多个 Context https://react.docschina.org/docs/context.html#consuming-multiple-contexts
 * 考虑下抽离子组件为单独组件吧
 */

/**
 * <Context.Provicer value={}> 通过比较 value 值，重渲染，若 value={{key: object}} 则父组件每次重渲染，都会连带着 Context 重渲染
 */



export default App;
