import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { userInfo } from 'os';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * 在 JSX 中嵌入表达式 用 { }
 */
// interface IUser {
//   firstName: string;
//   lastName: string;
// }
// function formatName(user: IUser) {
//   return user.firstName + ' ' + user.lastName;
// }
// const user: IUser = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const element = <h1>Hello {formatName(user)}!</h1>;

/**
 *  在 JSX 中给标签属性赋值用 ‘ ’
 */

/**
 * JSX 防止 XSS
 */
// const XSS = `<script> alert('XSS'注入) </scrpit>`;
// const element = <div>{XSS}</div>


/**
 * Babel 将 JSX 转义
 */
const elementJSX = <h1 className='greeting'>Hello World!</h1>
const elementBabel = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello Worlds!'
);

root.render(
  <div>
    {elementJSX}
    {elementBabel}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
