import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

interface ClockProps {

}

interface ClockState {
  date?: Date;
}
let isrend: boolean = true;
class Clock extends React.Component<ClockProps, ClockState, any> {
  timerID: NodeJS.Timer | null = null;
  outTimerID: NodeJS.Timer | null = null;

  constructor(props: ClockProps) {
    super(props);
    this.state = { date: new Date() };
  }

  // 组件首次挂载后 mount
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
      console.log('tick 执行了');
    }, 1000)
  }

  // 组件删除前 unmount
  componentWillUnmount() {
    this.timerID && clearInterval(this.timerID);

    console.log('timer 取消');

  }

  /**
   * 更新 this.state.date
   */
  tick() {
    this.setState({
      date: new Date()
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date && this.state.date.toLocaleTimeString()}.</h2>
      </div >
    )
  }

}


root.render(
  isrend ? <Clock /> : <></>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
