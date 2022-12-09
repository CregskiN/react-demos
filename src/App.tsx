import React from 'react';
import logo from './logo.svg';
import './App.css';


/**
 * 性能优化
 * 1. 工程层面
 *    https://zh-hans.reactjs.org/docs/optimizing-performance.html
 * 2. 避免调停 reconciliation
 *  对某节点：shouldComponentUpdate
 *     ? 该节点及子树 virtual DOM 有变化  
 *        ？ (重渲染)该节点，并递归 vDOM 不同的子树，重复如上逻辑
 *        :  几乎没有 SCU true && vDOM 不同的情况
 *     : (无需重渲染)
 *  一种案例：class extends React.PureComponent 只对 props state 做浅比较
 *  3. unmutable 不可变数据
 *    PureComponent 只会对 state 和 props 做浅比较
 *    Object.assign({}, state, subState)
 *    Immer 库
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
