import React from 'react';


/**
 * Ref 转发
 * what：
 *  一种可以获取组件内部 DOM 的 reference
 * why：
 *  在使用可重用组件时，可能需要对 DOM 操作
 * how：如下
 *  1. 父组件中，ref = React.createRef()
 *  2. 将 ref 传递到子组件的 ref 属性
 *  3. 挂载完毕后，ref.current 将指向子组件中 ref 配置的 DOM
 */

/**
 * 注意：
 * 1. 在 HOC 中，ref 与 map 中的 key 一样，因为不是 props，所以不会通过 {...this.props} 传递
 */

// interface FancyButtonProps extends React.PropsWithChildren { }
// const FancyButton = React.forwardRef((props: FancyButtonProps, ref: React.ForwardedRef<any>) => (
//   <button ref={ref} className="FancyButton">
//     {props.children}
//   </button>
// ));

// function App() {
//   const ref = React.createRef();
//   return (
//     <FancyButton ref={ref}>Click me!</FancyButton>
//   );
// }

/**
 * 在 HOC 中使用 ref
 */
function logProps(Component: React.ComponentClass) {
  interface LogPropsProps {
    forwardedRef: React.ForwardedRef<any>;
  }

  class LogProps extends React.Component<LogPropsProps, any> {

    componentDidUpdate(prevProps: LogPropsProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      const { forwardedRef, ...rest } = this.props;
      return <Component ref={forwardedRef} {...rest} />
    }
  }

  // ForwardRef -> LogProps -> Btn
  // return React.forwardRef((props, ref) => (
  //   <LogProps {...props} forwardedRef={ref} />
  // ))

  // renderFunction(ForwardRef) -> LogProps -> Btn
  // function renderFunction(props: any, ref: any) {
  //   return <LogProps  {...props} forwardedRef={ref} />
  // }
  // return React.forwardRef(renderFunction);

  const renderFunction = (props: any, ref: any) => (
    <LogProps  {...props} forwardedRef={ref} />
  )
  const name = Component.displayName || Component.name;
  renderFunction.displayName = `logProps(${name})`;

  return React.forwardRef(renderFunction);
}

class Btn extends React.Component {
  render() {
    return <button>Btn组件</button>
  }
}


export default logProps(Btn);
