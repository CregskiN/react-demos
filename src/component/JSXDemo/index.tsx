import React from 'react';
import Message, { MessageType } from './Message';


interface JSXDemoProps { };

const JSXDemo: React.FC<JSXDemoProps> = (props) => {

    const arr: MessageType[] = [];

    return (
        <div>
            {
                arr.length && <Message msg={arr} />
            }
        </div>
    )
}

export default JSXDemo;