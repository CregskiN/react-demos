import React from 'react';


/**
 * Refs & DOM
 * what：
 *  一种访问 DOM节点，或 render() 中创建的 React组件 的方式
 * why：
 *  典型的 React 数据流，props 是父子组件交流的唯一方式，ref 提供一种在数据流之外，修改子组件的方式
 *  子组件可以是 HTML DOM，也可以是 React 组件实例
 * how：
 *  1. 创建 Ref。this.myRef = React.createRef();
 *  2. 访问 Ref。const node = this.myRef.current;
 *    若 ref 挂载到 DOM 标签，则 ref.current 是 DOM 元素
 *    若 ref 挂载到 React class 组件，则 ref.current 是组件实例
 *    若 ref 挂载到 React 函数组件！！！不能工作，因为函数没有实例
 *  3. 注意区分 添加ref 和 转发ref
 */

// 给 HTML DOM 元素添加 ref
// class CustomTextInput extends React.Component {
//   textInputRef: React.RefObject<HTMLInputElement>;

//   constructor(props: any) {
//     super(props);
//     this.textInputRef = React.createRef<HTMLInputElement>();
//   }

//   focusTextInput() {
//     this.textInputRef.current?.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.textInputRef} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     )
//   }
// }

// 给 class 组件添加 ref
// class CustomTextInput extends React.Component {
//   textInputRef: React.RefObject<HTMLInputElement>;

//   constructor(props: any) {
//     super(props);
//     this.textInputRef = React.createRef<HTMLInputElement>();
//     this.focusTextInput = this.focusTextInput.bind(this);
//   }

//   focusTextInput() {
//     this.textInputRef.current?.focus();
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           ref={this.textInputRef} />
//         <input
//           type="button"
//           value="Focus the text input"
//           onClick={this.focusTextInput}
//         />
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   textInputRef: React.RefObject<CustomTextInput>;
//   constructor(props: any) {
//     super(props);
//     this.textInputRef = React.createRef<CustomTextInput>();
//   }

//   // mount：ref.current = class instance
//   // componentDidMount() {} 或 componentDidUpdate() {}
//   // unmount: ref.current = null
//   componentDidMount() {
//     // 给 class 组件添加 ref 后，
//     // 调用 ref class 实例的 focusTextInput 方法
//     this.textInputRef.current?.focusTextInput();
//   }

//   render() {
//     return (
//       <CustomTextInput ref={this.textInputRef} />
//     );
//   }
// }


// 回调 ref
class CustomTextInput extends React.Component {
  textInputElement?: HTMLInputElement;
  setTextInputRef: React.RefCallback<HTMLInputElement>;
  focusTextInput: React.MouseEventHandler<HTMLInputElement>;

  constructor(props: any) {
    super(props);

    // this.textInputRef = null;

    // ref回调 写成这种class 绑定函数的方式，可以避免 jsx內联式 ref回调写法，导致的 每次渲染组件实例，因新旧 ref 不同 渲染两次
    this.setTextInputRef = (element: HTMLInputElement) => {
      this.textInputElement = element;
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInputElement) {
        this.textInputElement.focus();
      }
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput({} as any);
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}



export default CustomTextInput;
