import React,{ Component } from 'react';
import { Button } from 'antd';

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }
    handleClick=()=>{
        setTimeout(()=>{
            this.setState(({
                data: 'xiao'
            }))
        },5000)
    }
    render() {
        return (
            <div onClick={ this.handleClick }>
                <h1>{ this.state.data}</h1>
                <Button>
                    点击
                </Button>
            </div>
        )
    }

}
export default Title;