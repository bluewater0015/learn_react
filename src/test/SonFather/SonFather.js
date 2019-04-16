import React,{ Component } from 'react';
import Input from '../../components/Input/Input';

var a = 1;
if(!(b in window)) {
    var b=2;
    a+=1;
}else {
    a+=2;
}
console.log('a',a); //3
console.log('b',b); //undefined

var m = 1;
function log() {
    var m=2;
    return function() {
        m+=1;
    }
}
var _log = log();
_log();
console.log(m);

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