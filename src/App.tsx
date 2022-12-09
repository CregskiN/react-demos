import React from 'react';
import logo from './logo.svg';
import './App.css';


/**
 * 协调 Reconciliation
 * what：
 *  1. render 函数在 state、props 更新时会被调用，同一个 render 函数会返回不同的 React 树，React 需要判断两棵树的差别，决定更新哪部分 UI
 *    ps：比较出两棵树的差别，有通用算法，一般 O(n^3)
 *  2. React 基于以下两种情况，提出一套 O(n) 的算法：
 *    2.1 两个不同类型的元素会产生出不同的树
 *    2.2 开发者可以使用 key 属性标识哪些子元素在不同的渲染中可能是不变的
 * 
 * how：
 * 1. 从根节点开始，递归比较节点，并执行对应操作
 *  
 *  1.1 若节点类型不同。例如 <a> 变成 <img>，React：拆卸原树 -> 构建新树
 *      卸载树：销毁DOM节点 -> 组件实例.componentWillUnmount()
 *      构建新树：创建DOM节点并插入 -> 组件实例.UNSAFE_componentWillMount() -> 组件实例.componentDidMount() 同时销毁原树 state
 *      ps：子节点也会被销毁、重建，例如：
 *      <div>
 *        <Counter />
 *      </div>
 *      变成：
 *      <span>
 *        <Counter />
 *      </span>
 *      Counter 组件会销毁、重新装载
 * 
 *  1.2 HTML 节点类型相同
 *      保留DOM节点，更新 DOM上有改变的属性，React组件实例不变
 *  1.3 React 节点类型相同 
 *      UNSAFE_componentWillReceiveProps() -> UNSAFE_componentWillUpdate() -> componentDidUpdate() -> render()
 *      组件实例保持不变（state 前后一致），
 * 
 * 2. 递归子节点   
 *  2.1 根节点比较完毕之后，同时便利两个根节点的子元素列表，有差异，产生一个 mutation
 *    若，增加子元素，头插会导致 React 重建所有子元素，尾插则不用
 *  2.2 解决2.1的方法：加 Key
 * 
 * 3. trade off
 *  diff 优先级：组件类型（有变化，重建） -> 组件 props、state -> 
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
