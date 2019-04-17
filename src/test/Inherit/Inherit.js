import React,{ Component } from 'react';

//构造函数
//Person.prototype = {constructor: Person }
function Person() {
    this.name = '天下';
}
// Person.prototype.sayName = function(){
//     return this.name;
// }
var person = new Person();
//实例还有constructor属性？并且指向构造函数？？？
console.log('person123---',person);
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
//console.log('son---',son.sayName());  //天下
//重写超类型中的方法
Son.prototype.sayName = function() {
    return false;
}
console.log('son---',son.sayName());  //false
//console.log('Son.prototype.constructor',Son.prototype.constructor); //Person

console.log('Object.Prototype.__proto__',Person.prototype.__proto__);
//Object 是父级构造函数
console.log('Object.Prototype.__proto__',Person.prototype.__proto__ ===  Object.prototype);
console.log(Person.__proto__ === Function.prototype); //Function.prototype

//2.确定原型和实例的关系
// （1）instanceof,只要用这个操作符来测试实例与原型链中出现过的构造函数，结果就会返回true
console.log('instanceof1',son instanceof Person); //true
console.log('instanceof2',son instanceof Son);    //true
console.log('instanceof3',son instanceof Object); //true
// （2）isPrototypeOf() 只要原型链中出现的原型，都可以说是该原型链所派生的实例的原型
console.log(Object.prototype.isPrototypeOf(son));  //true
console.log(Person.prototype.isPrototypeOf(son));  //true
console.log(Son.prototype.isPrototypeOf(son));     //true

//通过原型链实现继承时，不能使用对象字面量创建原型方法，因为这样会重新原型链。
function Person1() {
    this.name = 'tianxia';
}
Person1.prototype.sayName = function() {
    return this.name;
}
function Son1() {
    this.sonName = 'xiaoxiao';
}
Son1.prototype = new Person1();
Son1.prototype = {
    getSonValue: function() {
        return this.sonName;
    }
}
var son1 = new Son1();
console.log('123---',son1.__proto__ == Person1.prototype);
//console.log(son1.sayName()); //Uncaught TypeError: son1.sayName is not a function

//原型链的问题
function Person2() {
    this.colors = ['tianxia','www','aa'];
}
function Son2() {

}
//继承
Son2.prototype = new Person2();
var son2 = new Son2();
son2.colors.push('111');
console.log('son2.colors',son2.colors);
var son22 = new Son2();
console.log('son22.colors',son22.colors);

//请问普通函数有原型对象没？
function fun() {

}
console.log('fun',fun.prototype);

//构造函数、原型、实例三者的关系
function Person3() {
    this.name = 'tianxia';
    console.log('Person3-this',this);
}
var person3 = new Person3();

Person3.prototype.sayName = function() {
    console.log('这里的this是什么呢：',this);
    console.log('this.name-Person3',this.name);
}
person3.sayName();
console.log('person3',person3.__proto__ === Person3.prototype ); //true

function Son3() {
    console.log('son3-this',this);
    this.sonName = 'Son3';
}
Son3.prototype = new Person3();
console.log('Son3.prototype',Son3.prototype);
var son3 = new Son3();

Son3.prototype.saySonName = function() {
    console.log('this.sonName',this);
}
son3.sayName(); //同时执行了父构造函数的方法

//以后每句都加注释
function Person4() {
    this.name = 'tianxia';
}

Person4.prototype.sayName = function(){
    console.log('Person4');
    console.log(this.name);
}

function Son4() {
    this.sonName = 'xiao';
}

//Son4.prototype 相当于构造函数Person4的实例,既然是实例，就会有构造函数中的属性和方法。
Son4.prototype = new Person4();

Son4.prototype.saySonName = function() {
    console.log('this.sonName',this.sonName);
}

console.log('Son4.prototype',Son4.prototype); //
var son4 = new Son4();
//实例的constructor 指向什么呢？ 指向构造函数Person4，原本指向的是它本身构造函数
console.log('son4.constructor',son4.constructor);


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