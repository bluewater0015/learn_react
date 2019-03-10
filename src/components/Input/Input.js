
import React,{ Component } from 'react';

class Input extends Component {

    inputChange(e) {
        let value = e.target.value;
        this.props.fatherProps(value);
    }
    render() {
        return (
            <div>
                { this.props.father }
                <input onChange={ this.inputChange.bind(this)} />
            </div>
        )
    }
}
export default Input;