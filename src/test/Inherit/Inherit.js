import React,{ Component } from 'react';

//构造函数
//Person.prototype = {constructor: Person }
function Person() {
    this.name = '天下';
}
Person.prototype.sayName = function(){
    return this.name;
}

// var person = new Person();
// console.log('Person.prototype',Person.prototype);
// console.log('person',person.__proto__);


function Son() {
    this.sonName = '晓晓';
}
//继承
//Son继承了Person，而继承是通过创建Person的实例，并将该实例赋给Son.prototype实现的。
//实现的本质是重写原型对象，代之以一个新类型的实例。

//问题：这里继承了什么？
Son.prototype = new Person();

Son.prototype.saySonName = function() {
    return this.sonName;
}
var son = new Son();
console.log('son---',son.sayName());  //晓晓
//console.log('Son.prototype.constructor',Son.prototype.constructor); //Person

console.log('Object.Prototype.__proto__',Person.prototype.__proto__);
//Object 是父级构造函数
console.log('Object.Prototype.__proto__',Person.prototype.__proto__ ===  Object.prototype);
console.log(Person.__proto__ === Function.prototype); //Function.prototype

class Inherit extends Component {
    render() {
        return (
            <div>
                Inherit
            </div>
        )
    }
}

export default Inherit;