import React,{ Component } from 'react';

class Clock extends Component {
    render() {
        return (
            <div>
                <h1>Hello,World!</h1>
                <div>It is { this.props.date.toLocaleTimeString()}</div>
            </div>
        )
    }
}

class State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentDidMount() {
        this.timer = setInterval(
            ()=>this.trick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    trick() {
        this.setState({
            date: new Date()
        })
    }
    render(){
        return (
            <div>
                <Clock date={ this.state.date }/>
            </div>
        )
    }
}

export default State;