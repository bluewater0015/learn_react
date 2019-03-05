import React,{ Component } from 'react';

class DealEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggle: true,
            isToggle1: true,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    //bind(this)绑定
    handleClick() {

        this.setState(state=>({
           isToggle: !state.isToggle,
        }))
    }

    //箭头函数
    // handleClick=()=>{
    //     console.log('this',this);
    // }

    handle(e) {
        this.setState(state=>({
            isToggle1: !state.isToggle1,
        }))
    }
    render() {
        let id = 123;
        return (
            <div>
                <button onClick={ this.handleClick }>
                    { this.state.isToggle ? 'NO':'OFF' }
                </button>
                <button onClick={ (e)=> this.handle(id,e) }>
                    { this.state.isToggle1 ? 'NO1': 'OFF1'}
                </button>
            </div>
        )
    }
}
export default DealEvent;