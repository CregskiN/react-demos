import React from 'react';

interface IndexProps {};

const Index: React.FC<IndexProps> = (props) => {

    console.log('component Index render ...');

    return (
    <div>
        Component Index
    </div>
    )
}

export default Index;