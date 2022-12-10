import React from 'react';

/**
 * Render Props
 * what:
 *  组件可接收一个值为 ()=>JSX 的 props
 *  类似于 HOC
 * why：
 *  组件是 React 代码复用的最简单方式，封装好的组件，可通过这种方法将数据共享给其他组件
 *  使用 render prop 的库有 React Router、Downshift 以及 Formik。
 * how：
 *  1. render props
 *  2. HOC
 *  3. children props 都可以实现同样的效果
 *  react-motion 的 API 
 */
interface CatProps {
  mouse: {
    x: number,
    y: number
  }
}
class Cat extends React.Component<CatProps> {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

interface MouseProps { render: React.FC }
interface MouseState { x: number; y: number; }
class Mouse extends React.Component<MouseProps, MouseState> {
  constructor(props: MouseProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  // 不用内联式的箭头函数
  // 否则在 PureComponent 中会多次渲染
  rend(mouse: any) {
    return <Cat mouse={mouse} />
  };

  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={this.rend} />
      </div>
    );
  }
}

export default MouseTracker;
