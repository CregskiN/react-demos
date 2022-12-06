import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

/**
 * 状态提升：若多个组件拥有相同状态，可将其提升到共同父组件
 */
interface BoilingVerdictProps {
  celsius: number;
}
function BoilingVerdict(props: BoilingVerdictProps) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

interface TemperatureInputProps {
  scale: string;
}
interface TemperatureInputState {
  temperature: string;
}
interface S {
  c: string;
  f: string;
}
const scaleNames: S = {
  c: 'Celsius',
  f: 'Fahrenheit'
};
/**
 * 场景：父组件 F、子组件 A、子组件 B
 * 1. A、B 使用相同的数据，保存在各自的 state
 * 2. 状态提升：将 state 转移到父组件 F，并将数据修改函数(含this.setState) 传递给子组件 A、B
 */
class TemperatureInput extends React.Component<TemperatureInputProps, TemperatureInputState> {
  constructor(props: TemperatureInputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: '' };
  }

  handleChange(e: React.ChangeEvent<any>) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        {/* <legend>Enter temperature in {scaleNames[scale]}:</legend> */}
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

interface CalculatorState {
  temperature: string;
}

class Calculator extends React.Component<any, CalculatorState> {
  render(): React.ReactNode {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    );
  }
}

root.render(
  <Calculator />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
