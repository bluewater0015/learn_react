import React,{ Component } from 'react';
import Input from '../../components/Input/Input';

class SonFather extends Component {
    constructor(props) {
        super(props);
    }

    father(value) {
        console.log('father',value);
    }
    
    render() {
        return (
            <div>
                <Input father='父组件传下来的值' fatherProps={ this.father.bind(this) }/>
            </div>
        )
    }
}

export default SonFather;