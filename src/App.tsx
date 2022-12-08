import React from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * 错误边界组件：
 * what：
 *  1. 捕获发生在子组件树中任意位置的 js 错误，并显示降级 UI 的组件
 *  2. 无法捕获：事件 handler 内部的错误、异步代码、SSR 错误、ErrorBoundary 自身错误
 *  3. 定义：class 内有 static getDerivedStateFromError，或 ComponentDidCatch(){}
 * 
 * why：
 *  1. 可以应用在：
 *    路由页面 404、
 *    react 组件出现错误，而未被捕获，在 react16，整个组件树都会被 unmoun、
 *    组件 displayName 可以在出错时的组件栈中看到，帮助 debug
 *  2. 错误边界无需捕获事件 handler 中的错误，因为 try-catch 可以做到
 * how：如下
 */
interface ErrorBoundaryProps extends React.PropsWithChildren { }
interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * 
   * @param error 
   * @returns State | null
   */
  static getDerivedStateFromError(error: React.GetDerivedStateFromError<ErrorBoundaryProps, ErrorBoundaryState>) {
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // 你同样可以将错误日志上报给服务器
    // logErrorToMyService(error, errorInfo);
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以自定义降级后的 UI 并渲染
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

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
