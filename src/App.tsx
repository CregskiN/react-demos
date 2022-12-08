import React from 'react';
import logo from './logo.svg';
import './App.css';


/**
 * 高阶组件：
 * what：
 *  1. 一种基于 react 组合特性而形成的一种设计模式
 *  2. 组件：props -> UI
 *  3. 高阶组件：组件 -> 组件
 *  4. HOC 与容器组件模式
 *    容器组件：关注点分离，由容器组件管理订阅、状态，将 props 传递给 UI 组件，并实现
 *    HOC：把函数作为容器，接受参数，组件 组合，类似装饰器！！
 * why：
 *  React 抛弃了 mixins 的设计 https://zh-hans.reactjs.org/blog/2016/07/13/mixins-considered-harmful.html
 * how：
 *  1. 为保证原组件的可重用性，不要在 HOC 中修改原组件的任何内容，尤其是：component.prototype.shoudlComponentUpdate 等生命周期函数
 *  2. 不要在 render 中使用 HOC：render 中使用高阶函数生成的高阶组件，会在每次 render 时都生成一遍新的，过度渲染。
 *      如果需要调用 HOC，在生命周期函数和构造函数进行
 *  3. 注意 HOC 中别忘了复制静态方法，在 HOC 函数 return 之前复制就好。也可以用 'hoist-non-react-statics' 库复制静态方法
 *  4. ref 不会被透传
 *    
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
