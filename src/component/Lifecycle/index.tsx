import React, { Component } from 'react';

import CanUnmount from './CanUnmount';

interface LifecycleProps { };
interface LifecycleState {
    counter: number;
};

function tableLog(logName: string, obj: any) {
    if (obj !== null && obj !== undefined) {
        if (typeof obj === 'object' && obj.length) {
            console.log(logName);
            console.table(obj);
        }
    }
}


class lifecycle extends Component<LifecycleProps, LifecycleState> {

    handleAdd() {
        this.setState((state, props) => ({
            counter: state.counter + 1
        }))
    }

    handleLess() {
        this.setState((state, props) => ({
            counter: state.counter - 1
        }))
    }

    handleReset() {
        this.setState((state, props) => ({
            counter: 0
        }))
    }

    // Mounting
    constructor(props: LifecycleState) {
        super(props);
        this.state = {
            counter: 0,
        };

        console.group({ lifecycle: 'constructor' });
        console.table(this.state)
        console.groupEnd();

        this.handleAdd = this.handleAdd.bind(this);
        this.handleLess = this.handleLess.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    static getDerivedStateFromProps(props: LifecycleProps, state: LifecycleState) {
        // render-phase 获得来自副组件的props派生
        console.group({ lifecycle: 'getDerivedStateFromProps' });
        tableLog('props', props);
        tableLog('state', state);
        console.groupEnd();
        return null;
    }

    render() {
        console.group({ lifecycle: 'render' });

        console.groupEnd();
        const { counter } = this.state;
        const { handleAdd, handleLess, handleReset } = this;

        if (counter < 3) {
            return (
                <div>
                    {counter}
                    <button onClick={handleAdd}>+1</button>
                    <button onClick={handleLess}>-1</button>
                </div>
            )
        } else {
            return (
                <div>
                    {counter}
                    <button onClick={handleReset}>reset</button>
                    <CanUnmount />
                </div>
            )
        }


    }

    componentDidMount() {
        console.group({ lifecycle: 'componentDidMount' });
        console.log('Mounting finished')
        console.groupEnd();
        console.log('\n');
    }

    // Updating
    // static getDerivedStateFromProps

    shouldComponentUpdate(nextProps: LifecycleProps, nextState: LifecycleState) {
        console.group({ lifecycle: 'shouldComponentUpdate' });
        tableLog('nextProps', nextProps);
        tableLog('nextState', nextState);
        console.groupEnd();
        if (this.state.counter !== nextState.counter) {
            return true;
        }
        return false;
    }

    // render

    getSnapshotBeforeUpdate(prevProps: LifecycleProps, prevState: LifecycleState) {
        console.group({ lifecycle: 'getSnapshotBeforeUpdate' });
        tableLog('prevProps', prevProps);
        tableLog('prevState', prevState);
        console.log('getSnapshotBeforeUpdate finished');
        console.groupEnd();
        return { snapshot: 'ss' };
    }

    componentDidUpdate(prevProps: LifecycleProps, prevState: LifecycleState, snapshot: any) {
        console.group({ lifecycle: 'componentDidUpdate' });
        tableLog('prevProps', prevProps);
        tableLog('prevState', prevState);
        tableLog('snapshot', snapshot);
        console.log('Update finished');
        console.groupEnd();
        console.log('\n');
    }

    // Upmounting
    componentWillUnmount() {
        console.group({ lifecycle: 'componentWillUnmount' });
        console.log('Unmounting finished');
        console.groupEnd();
        console.log('\n');
    }


}

export default lifecycle;