import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * 包含关系：
 * <A>
 *  <A.prop.children> 
 * </A>
 * 1. 直接写成 HTML 嵌套风格
 * 2. 也可以写成 name-value={JSX} 传递给子组件，类似 slot 
 */
// interface FancyBorderProps extends React.PropsWithChildren {
//   color: string;
// }
// function FancyBorder(props: FancyBorderProps) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">Welcome</h1>
//       <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
//     </FancyBorder>
//   );
// }
// root.render(
//   <WelcomeDialog />
// );

/**
 * 特例关系：WelcomeDialog 是 Dialog 的一个特例，通过 props 定制不同的 Dialog
 * 实现方法：组合：函数组件、类组件
 */
interface FancyBorderProps extends React.PropsWithChildren {
  color: string;
}
function FancyBorder(props: FancyBorderProps) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}
interface DialogProps {
  title: string;
  message: string;
}
function Dialog(props: DialogProps) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  );
}

function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting our spacecraft!" />
  );
}

root.render(
  <WelcomeDialog />
);
/**
 * 没有需要继承的情况
 */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
