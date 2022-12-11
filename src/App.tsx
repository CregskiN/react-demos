import React, { useState, useCallback, useReducer, useMemo, useRef, forwardRef, useImperativeHandle, useEffect, useDebugValue } from 'react';

/**
 * useState(defaultValue)
 * useState(() => {}) 只在首次渲染调用函数
 */


/**
 * useReducer
 * what：
 *  面对复杂 state 的一种替代方案
 *  const [state, dispatch] = useReducer(reducer, initialArg, init);
 * why：
 *  state 逻辑复杂且包含多个子值，或 newState 需要用 prevState 生成
 * how：
 */

// interface ReducerState {
//   count: number;
// }
// interface ReducerAction {
//   type: string;
//   payload?: any;
// }
// const initialState: ReducerState = { count: 0 };

// function reducer(prevState: ReducerState, action: ReducerAction) {
//   switch (action.type) {
//     case 'increment':
//       return { ...prevState, count: prevState.count + 1 };
//     case 'decrement':
//       return { ...prevState, count: prevState.count - 1 };
//     default:
//       throw new Error();
//   }
// }

// function Counter() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//     </>
//   );
// }

// export default Counter;

/**
 * 
 * memoized、memorized 前者是用于存储计算结果的缓存
 *  只有 deps 改变才会重新生成 memo 值
 * 
 * useCallback、useMemo
 * what：
 *  useCallback 返回一个 memoized 的函数
 *  useCallback(fn, deps) 相当于 useMemo(() => fn, deps)
 * why：
 * how：
 *  useMemo
 *    1. 传入 useMemo 的函数会在 render 期间执行，故副作用（DOM操作、http）不可在传入的函数内
 *    2. 如果没有 deps，则每次渲染 useMemo 都会重新计算
 */
// const data1 = 1;
// const data2 = 2;
// const Component1 = useCallback(() => { }, [data1, data2]);
// const Component2 = useMemo(() => { }, [data1, data2]);
// const memoizedValue = useMemo(() => data1 + data2, [data1, data2]);


/**
 * useRef
 * what：
 *  一种存储任何可变值的容器，该容器内值的改变不会引起组件重渲染
 *  一种最常见的用法是，用于存储 ref
 * why：
 *  
 * how：
 *  const refContainer = useRef(initialValue);
 *  在每次渲染后，返回一个新的 ref。如果想要在 React 绑定或解绑 DOM 节点的 ref 时运行某些代码，则需要使用回调 ref 来实现。
 */
// export default function TextInputWithFocusButton() {
//   const inputEl = useRef<HTMLInputElement>(null);
//   const onButtonClick = () => {
//     // `current` 指向已挂载到 DOM 上的文本输入元素
//     inputEl.current?.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }

/**
 * useImperativeHandle
 * what：
 *  将函数组件的实例值，暴露给父组件
 */
// function FancyInputFC(props: any, ref: React.Ref<any>) {
//   const inputRef = useRef<HTMLInputElement>(null);
//   useImperativeHandle(ref, () => ({
//     focus: () => {
//       inputRef.current?.focus();
//     }
//   }));
//   return <input ref={inputRef} />;
// }
// const FancyInput = forwardRef(FancyInputFC);

// const App = () => {
//   const inputRef = useRef(null);
//   useEffect(() => {
//     FancyInput
//   })
//   return (
//     <FancyInput ref={inputRef} />
//   )
// }
// export default App;

/**
 * useLayoutEffect
 * what：
 *  1. 函数签名与 useEffect 相同
 *  2. 调用阶段与 componentDidMount、componentDidUpdate 相同
 *  3. 在 useLayoutEffect 内可以使用它来读取 DOM 布局并同步触发重渲染。在浏览器执行绘制之前，useLayoutEffect 内部的更新计划将被同步刷新。 ？？？？？
 * why：
 * 
 * how：
 *  1. 能用 useEffect 就别用 useLayoutEffect
 */

/**
 * useDebugValue
 * what：
 *  用于在 React dev tool 显示自定义的 hook 标签
 */
// function useFriendStatus(friendID: any) {
//   const [isOnline, setIsOnline] = useState(null);

//   // ...

//   // 在开发者工具中的这个 Hook 旁边显示标签
//   // e.g. "FriendStatus: Online"
//   useDebugValue(isOnline ? 'Online' : 'Offline');

//   return isOnline;
// }