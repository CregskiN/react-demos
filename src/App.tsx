import React, { Component } from 'react';
import ImmutableDemo from './component/ImmutableDemo';

// import ErrorBoundary from './component/ErrorBoundary';
// import ErrorComponent from './component/ErrorBoundary/ErrorComponent';
// import Counter from './component/Counter';
// import Lifecycle from './component/Lifecycle';
// import JSXDemo from './component/JSXDemo';


class App extends Component {


  render() {
    console.log('App render...');

    return (
      <div className="App">
        {/* <ErrorBoundary> */}
        {/* <ErrorComponent /> */}
        {/* </ErrorBoundary> */}
        {/* <Context.Provider value={this.state.defaultContext}> */}
        {/* </Context.Provider> */}
        {/* <Lifecycle /> */}
        {/* <JSXDemo /> */}
        <ImmutableDemo />
      </div>
    );
  }

}

export default App;
