import React, { Component } from 'react';

interface ClockProps { };
interface ClockState {
    date: Date;
    useridA: number;
}
interface ClockFields {
    timer: any;
}

interface GithubUser {
    login: string;
    id: string;
}

class Clock extends Component<ClockProps, ClockState> {
    constructor(props: ClockProps) {
        super(props);
        this.state = {
            date: new Date(),
            useridA: 0,
        }
        this.handleClick = this.handleClick.bind(this);
        this.tick = this.tick.bind(this);


    }

    tick() {
        this.setState(() => ({
            date: new Date()
        }))
    }

    fetchGithubUser(url: string, cb: (items: GithubUser) => void) {
        fetch(url).then((res) => {
            return res.json();
        }).then(({ items }) => {
            console.log(items);
            cb(items);
        })
    }

    handleClick(e: React.MouseEvent) {
        this.setState({
            useridA: this.state.useridA + 1
        })
    }

    componentDidMount() {
        (this as any).timer = setInterval(this.tick, 1000);

    }

    componentWillUnmount() {
        clearInterval((this as any).timer);
    }


    render() {
        const { date, useridA } = this.state;
        const { handleClick } = this;
        console.log('render');

        return (
            <>
                <div>{date.toLocaleTimeString()}</div>
                <button onClick={handleClick}>counter A :{useridA}</button>
            </>
        )
    }
}

export default Clock;