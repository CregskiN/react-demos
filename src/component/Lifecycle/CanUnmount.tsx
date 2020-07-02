import React, { Component } from 'react';

interface CanUnmounProps { };

class CanUnmoun extends Component {

    componentWillUnmount() {
        console.group({ lifecycle: 'CanUnmount componentWillUnmount' });
        console.log('CanUnmount Unmounting finished');
        console.groupEnd();
        console.log('\n');
    }

    render() {

        return (
            <div>
                Component CanUnmoun
            </div>
        )
    }
}

export default CanUnmoun;