import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function LoginButton(props: any) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props: any) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function Hello(props: any) {

  if (!props.isLoggedIn) { // 阻止渲染 // TODO：该阻止渲染的方法，是否会调用 ComponentWillUnmount？从文档来看，不会
    return null;
  }
  return <h1>hello, {props.isLoggedIn ? "has Logged in" : "has not logged in"}</h1>
}

class LoginControl extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Hello isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}


root.render(
  <LoginControl />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
