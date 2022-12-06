import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * react 中，form 存在于 JSX 中，可以很方便地保有自身状态，名为 “受控组件”
 */

/**
 * <form>
 */
// interface NameFormProps {}
// interface NameFormState {
//   value: string;
// }

// class NameForm extends React.Component<NameFormProps, NameFormState> {
//   constructor(props: NameFormProps) {
//     super(props);
//     this.state = { value: '' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event: React.ChangeEvent<HTMLInputElement>) {
//     this.setState({
//       value: event.target.value
//     });
//   }

//   handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     alert('提交的名字: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           名字:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

// root.render(
//   <NameForm />
// );

/**
 * <texarea> 
 * 在 HTML 中用子元素显示内容
 * 在 react 中用 value 属性控制内容
 */
// interface EssayFormState {
//   value: string;
// }
// class EssayForm extends React.Component<any, EssayFormState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     alert('提交的文章: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           文章:
//           <textarea value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }
// root.render(<EssayForm />);

/**
 * <select> <option>
 * 1. 在 HTML 中，option 的 selected 属性表示被选中
 * 2. 在 react 中，slect.value 属性为 option.value 表示该选项被选中
 * 3. select.multiple={true}, select.value 可以为数组，含义是多选
 */
// interface FlavorFormState {
//   value: string;
// }
// class FlavorForm extends React.Component<any, FlavorFormState> {
//   constructor(props: any) {
//     super(props);
//     this.state = { value: 'coconut' };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event: React.FormEvent<HTMLFormElement>) {
//     alert('你喜欢的风味是: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择你喜欢的风味:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">葡萄柚</option>
//             <option value="lime">酸橙</option>
//             <option value="coconut">椰子</option>
//             <option value="mango">芒果</option>
//           </select>
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

// root.render(<FlavorForm />);

/**
 * 文件 <input type="file" />
 * 1. value 只读，为非受控组件
 */

/**
 * 多个 input
 * 
 */
// interface ReservationState {
//   isGoing?: boolean;
//   numberOfGuests?: number;
// }
// class Reservation extends React.Component<any, ReservationState> {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event: React.ChangeEvent<any>) {
//     const target = event.target;
//     const value = target.name === 'isGoing' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//   }

//   render() {
//     return (
//       <>
//         <form>
//           <label>
//             参与:
//             <input
//               name="isGoing"
//               type="checkbox"
//               checked={this.state.isGoing}
//               onChange={this.handleInputChange} />
//           </label>
//           <br />
//           <label>
//             来宾人数:
//             <input
//               name="numberOfGuests"
//               type="number"
//               value={this.state.numberOfGuests}
//               onChange={this.handleInputChange} />
//           </label>
//         </form>

//         <button onClick={() => { console.log(this.state) }}>show</button>
//       </>
//     );
//   }
// }
// root.render(<Reservation />);

// root.render(<input value="hi" />)
// root.render(<input value={null} />) // error

// Formik 官方建议的基于受控组件和state 的表单库

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
