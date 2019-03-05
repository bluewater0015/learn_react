import React,{ Component } from 'react';

function getMessage(user) {
    return user.name + user.age;
}

class JSX extends Component {
    getName(user){
        //这样的话，逻辑相对严密一些
        if(user){
            return user.name + ' ' + user.age;
        }
        return 'tianxia';
    }
    render(){
        const name = 'JSX';
        const user  = {
            name: 'tianxia',
            age: 18,
        }
        const element = <h1>Hello,{ this.getName(user)}</h1>
        const message = <h2>Hello,{ getMessage(user) }</h2>
        return  <div>
                    { element }
                    <div>
                        { message }
                    </div>
                </div>
    }
}

export default JSX;
