import React, { Component } from 'react';

//3.谨慎的定义方法
function Person() {
    this.name = '天下';
}

Person.prototype.sayName = function() {
    return this.name;
}

function Son() {
    this.sonName = 'xiao';
}
Son.prototype = new Person();
Son.prototype.saySonName = function() {
    return this.sonName;
}
var son = new Son();
//console.log('son.sayName1',son.sayName()); //天下
//重写超类型的方法
Son.prototype.sayName = function() {
    return false;
}
console.log('son.sayName2',Son.prototype.sayName()); //false
//设想中的原型链已经切断
Son.prototype = {
    sayName1: function() {
        console.log(123)
    }
}

console.log(Son.sayName());


class Inherit1 extends Component {
    render() {
        return (
            <div>
                Inherit1
            </div>
        )
    }
}
export default Inherit1;