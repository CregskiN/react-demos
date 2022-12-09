import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 深入 JSX
 * 1. 指定 React 元素类型（使用 React HTML 标签）
 *  必须在作用域内。使用 JSX 必须有 import React 或将 React 挂载到全局变量
 * 2. JSX 类型必须是大写开头
 * 3. prop 如果没赋值，默认为 true
 * 4. render() return [<li></li>, <li></li>, <li></li>, <li></li>]
 * 5. false, null, undefined, and true 是合法的子元素。但它们并不会被渲染
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
