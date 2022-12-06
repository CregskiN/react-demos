import React, { HTMLAttributeAnchorTarget } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * 阻止 HTML 标签默认行为
 */
const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: number) => {
  event.preventDefault();
  console.log('The link was clicked');
}

const ActionLink: React.FC = () => {
  return (
    <a href="www.baidu.com" onClick={(e) => handleClick(e, 10)}>Click me</a>
  )
}


root.render(
  <ActionLink />
);



// interface ToogleState {
//   isToggleOn: boolean;
// }
/**
 * 在class中，如果 handleClick 不加 ()
 */
// class Toggle extends React.Component<any, ToogleState> {
//   constructor(props: any) {
//     super(props);
//     this.state = { isToggleOn: true };

//     // 为保证响应函数中 this 指向正确
//     // 1. 这个绑定是必不可少的，否则 handleClick 中 click 为 undefined
//     // 2. 另一种解决办法是，不在构造函数 bind，在 onclick 中给事件处理函数加 ()，并且让响应函数返回真正的响应函数（不建议，会导致每次都重建一个响应函数）
//     // 3. 还有一种，public class fields
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     return () => {
//       this.setState(state => ({
//         isToggleOn: !state.isToggleOn
//       }))
//     };
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         Click me
//       </button>

//       // <button onClick={this.handleClick()}>
//       //   {this.state.isToggleOn ? 'ON' : 'OFF'}
//       // </button>
//     );
//   }
// }
// root.render(<Toggle />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
