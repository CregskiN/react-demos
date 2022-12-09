import React from 'react';
import ReactDOMClient from 'react-dom/client';
import ReactDOM from 'react-dom';


// 在 DOM 中有两个容器是兄弟级 （siblings）
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');


function Child() {
  // 这个按钮的点击事件会冒泡到父元素
  // 因为这里没有定义 'onClick' 属性
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

interface ModalProps extends React.PropsWithChildren { }
class Modal extends React.Component<ModalProps, any> {
  el: HTMLElement;

  constructor(props: ModalProps) {
    super(props);
    this.el = document.createElement('div');
  }

  /**
   * 1. 将 div 挂载到 modal-root 下
   */
  componentDidMount() {
    // 在 Modal 的所有子元素被挂载后，
    // 这个 portal 元素会被嵌入到 DOM 树中，
    // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
    // 如果要求子组件在挂载时可以立刻接入 DOM 树，
    // 例如衡量一个 DOM 节点，
    // 或者在后代节点中使用 ‘autoFocus’，
    // 则需添加 state 到 Modal 中，
    // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
    modalRoot && modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot && modalRoot.removeChild(this.el);
  }

  /**
   * 2. 将 this.props.children 挂载到 div 下
   * 于是，层级关系为：modal-root -> div -> Modal -> Modal.children(button)
   */
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    );
  }
}

interface ParentProps {
  clicks: number;
}
class Parent extends React.Component<any, ParentProps> {
  constructor(props: any) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // 当子元素里的按钮被点击时，
    // 这个将会被触发更新父元素的 state，
    // 即使这个按钮在 DOM 中不是直接关联的后代
    this.setState(state => ({
      clicks: state.clicks + 1
    }));
  }

  /**
   * React 层级
   *  app-root -> Parent -> Modal -> Child
   *  Modal-root -> null
   * 使用 Portal 后，的 DOM 层级：
   *  app-root -> 刨除 Modal 的 Parent
   *  modal-root -> Modal -> Child
   * 
   * Portal 改变了 DOM 层级关系，但没有改变事件冒泡顺序，冒泡顺序仍按照 React 层级进行
   */
  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <Child />
        </Modal>
      </div>
    );
  }
}

const root = appRoot && ReactDOMClient.createRoot(appRoot);
// 最终只渲染 app-root，但所有都渲染了
root && root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
