import React, { Component, PureComponent } from 'react';

interface WordAdderState {
    words: string[]
};

class WordAdder extends Component<any, WordAdderState> {

    constructor(props: any) {
        super(props);
        this.state = {
            words: ['marklar']
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // 版本1: 这部分代码很糟，而且还有 bug
        const words = this.state.words;
        words.push('marklar');
        this.setState({ words: words });

        // 版本2: concat重写
        // this.setState((state, props) => ({
        //     words: state.words.concat(['b'])
        // }))

        // 版本3: 扩展运算符写法
        // this.setState((state, props) => ({
        //     words: [...state.words, 'b']
        // }))
    }

    render() {
        console.log('Word render');

        return (
            <div>
                <ListOfWords words={this.state.words} />
                <button onClick={this.handleClick}>add word</button>
            </div>
        );
    }
}

interface ListOfWordsProps {
    words: string[];
}

class ListOfWords extends PureComponent<ListOfWordsProps, any> {
    render() {
        console.log('ListOfWords render');
        // ListOfWords迟迟得不到刷新，是因为PureComponent只对this.props.words进行浅比较，而两者引用比较的结果是：相同
        // 改进方法：
        // 1. 父组件修改状态时返回一个新对象，改进父组件handleClick中修改state的写法
        // 2. 改PureComponent为component
        return <div>{this.props.words.join(',')}</div>;
    }
}

export default WordAdder;