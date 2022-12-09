import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

/**
 * Profilter API
 * what：
 *  测量其内包裹的 React 组件渲染一次的时间
 * why：
 *  性能优化，with Memo
 * how：
 *  1. Profilter 仅用于开发环境，如果要于生产环境 https://gist.github.com/bvaughn/25e6233aeb1b4f0cdb8d8366e54a3977
 *  2. 
 */

const profilterID = 'app';

/**
 * 每次 React 提交一个更新，调用的函数
 * @param id 本次提交的 Profilter id
 * @param phase mount 或 undate
 * @param actualDuration 本次更新 committed 花费的渲染时间
 * @param baseDuration 估计，不使用 memoization 下，渲染整棵 Protilter 树的时间
 * @param startTime 本次更新中 React 开始渲染的时间戳
 * @param commitTime 本次更新中 React committed 的时间戳
 * @param interactions 属于本次更新的 interactions 的集合
 */
const appOnRender: React.ProfilerOnRenderCallback = (id, phase, actualDuration, baseDuration, startTime, commitTime, interactions) => {
  console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);

}


function App() {
  return (
    <React.Profiler id={profilterID} onRender={appOnRender}>
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
    </React.Profiler>
  );
}

export default App;
