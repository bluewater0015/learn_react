import React,{ Component } from 'react';

//6.1 理解对象
var person = new Object();
person.name = '天下123456';
person.age = 18;
person.sayName = function() {
    console.log('this.name',this.name);
}
person.sayName();
//这里的this指向是person，谁调用它就会指向谁，普通的函数this指向的是window。
//上面的例子用面对象字面量可以这样写：
var person1 = {
    name: 'tianxia',
    age: 18,
    sayName: function() {
        console.log('字面量对象：',this.name);
    }
}
person1.sayName();

//this指向调用它者。
var xiao1 = {
    name: '天下',
    age: 18,
}
Object.defineProperty(xiao1,'name',{
    configurable: true,

    Witable: true,
    value: '晓666',
});
console.log('xiao1',xiao1);

class ObjectOriented extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>ObjectOriented</div>
        )
    }
}

export default ObjectOriented;