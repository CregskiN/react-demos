import React from 'react';

export interface MessageType {
    info: string;
    userId: number;
    friends: string[];
}

interface MessageProps {
    msg: MessageType[]
};

const Message: React.FC<MessageProps> = (props) => {
    const {
        msg
    } = props;

    return (
        <div>
            {msg}
        </div>
    )
}

export default Message;