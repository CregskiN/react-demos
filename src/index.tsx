import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface NumberListProps {
  numbers: number[];
}
// const NumberList: React.FC<NumberListProps> = (props) => {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

interface ListItemProps {
  value: number;
}
/**
 * 指定 key 的位置，在父组件而不是子组件 li 本身
 */
// function ListItem(props: ListItemProps) {
//   const value = props.value;
//   return (
//     // 错误！你不需要在这里指定 key：
//     <li key={value.toString()}>
//       {value}
//     </li>
//   );
// }

// function NumberList(props: NumberListProps) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     // 错误！元素的 key 应该在这里指定：
//     <ListItem value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }


/**
 * 1. key 在 map 中指定
 * 2. key 在兄弟节点之间，必须唯一
 * 3. key 不会传给子组件，仅用于 react diff
 * 4. 最佳实践：若 map 套用层级过多，就提取为自定义子组件
 */
function ListItem(props: ListItemProps) {
  // 正确！这里不需要指定 key：
  return <li>{props.value}</li>;
}

function NumberList(props: NumberListProps) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => // 在 map 中解析出的标签，添加 key 就对了！！
    // 正确！key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />

  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
root.render(
  <NumberList numbers={numbers} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
