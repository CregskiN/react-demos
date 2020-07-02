import React, { Component } from 'react';

interface ErrorComponentProps { };
interface ErrorComponentState {
    counter: number;
};

class ErrorComponent extends Component<ErrorComponentProps, ErrorComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 事件处理的错误，ErrorBoundary无法捕捉
        // if (this.state.counter === 5) {
        //     throw new Error();
        // }
        this.setState({
            counter: this.state.counter + 1
        });

    }

    render() {
        console.log('component ErrorComponent render...');
        const { counter } = this.state;
        const { handleClick } = this;
        if (counter === 5) {
            throw new Error('counter creashed!');
        }
        return (
            <>
                <p>this component will throw Error when the counter equal to 5</p>
                <p>counter : {counter}</p>
                <button onClick={handleClick}>add</button>
            </>
        )
    }
}

export default ErrorComponent;