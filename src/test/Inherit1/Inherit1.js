import React, { Component } from 'react';

//3.谨慎的定义方法
function Person6() {
    this.name = '天下';
}
var person61 = new Person6();

Person6.prototype.sayName = function() {
    return this.name;
}

function Son6() {
    this.sonName = 'xiao';
}
Son6.prototype = new Person6();
Son6.prototype.saySonName = function() {
    return this.sonName;
}
var son6 = new Son6();
//重写超类型的方法
Son6.prototype.sayName = function() {
    return false;
}
console.log('son.sayName1',son6.sayName()); //false
console.log('son.sayName2',Son6.prototype.sayName()); //false
console.log('person61',person61.sayName());

//设想中的原型链已经切断
// Son.prototype = {
//     sayName1: function() {
//         console.log(123)
//     }
// }

//console.log(Son.sayName());


function Person5() {

}
var person5 = new Person5();
//实例为何有一个constructor属性呢？
console.log('person5.constructor',person5.constructor); //构造函数Person5
//实例的proto指针指向什么呢？
console.log('person5.__proto__',person5.__proto__); // 原型：{ constructor: f }
//构造函数的prototype指向什么呢？
console.log('Person5.prototype',Person5.prototype); // 原型：{ constructor: f }
//判断实例的proto指针和构造函数的原型是否相等
console.log('是否相等',person5.__proto__ === Person5.prototype); //true
//看看这个是什么？
console.log('看看',person5.__proto__.constructor == person5.constructor ); //true
//这二者的区别是什么呢？

/*原型链的问题*/

//借用构造函数
//用来解决原型中包含引用类型所带来的问题。
//解决思路：在子类型的函数构造的内部调用超类型的构造函数
function Person7 () {
    this.colors = ['天下','小','晓晓'];
}

function Son7() {
    //继承了Person7
    //这里通过改变this的指向。
    Person7.call(this);
}

var instance1 = new Son7();
instance1.colors.push('aa123');
console.log('instance1',instance1.colors);

var instance2 = new Son7();
console.log('instance2',instance2.colors);

//1.传递参数
function Person8(name) {
    this.name = name;
}

function Son8() {
    Person8.call(this,'天下');
    this.age = 18;
}
var son8 = new Son8();
console.log('son8',son8);
console.log('son8.age',son8.age);
//2.借用构造函数中存在的问题
// （1）方法都在构造函数中定义，无法复用。
// （2）在超类型的原型中定义的方法，对自类型而言是不可见的。

//6.3.3 组合继承
//也叫伪经典继承，指的是将原型链和借用构造函数的技术组合在一块，从而发挥二者之长的一种继承模式。
//思想：使用原型链实现对原型属性和方法的继承，而通过构造函数来实现对实例属性的继承。
function Person9(name) {
    this.name = name;
    this.colors = ['天下','晓晓','123'];
}

Person9.prototype.sayName = function() {
    console.log('this.name',this.name);
}
function Son9(name,age) {
    Person9.call(this,name);
    this.age = age;
}

//继承方法
Son9.prototype = new Person9();
Son9.prototype.sayAge = function() {
    console.log(this.age);
}

var son9 = new Son9('王晓',18);
son9.colors.push('qqqqq');
console.log('son9.colors',son9.colors);
son9.sayName();
son9.sayAge();

var son91 = new Son9('我么你',22);
console.log('son91',son91.colors);
son91.sayName();
son91.sayAge();


//原型存在的问题
//存在的问题是：所有实例会共享一个实例。
function Person10() {
    this.colors = ['tianxia','xiaoxiao'];
}

function Son10() {

}
Son10.prototype  = new Person10();
var son10 = new Son10();
son10.colors.push('123');
console.log('son10.colors',son10.colors);

var son101 = new Son10();
console.log('son101.colors',son101.colors);

//解决原型存在的问题，就会引入新的继承方式。
//借用构造函数
//思想：子类型构造函数中调用超类型构造函数。

function Person11(name) {
    this.name = name;
    this.colors = ['11','22','33'];
}

function Son11() {
    //继承了Person11
    //console.log('Person11.call(this)',Person11.call(this));
    Person11.call(this);
}

var son11 = new Son11();
son11.colors.push('haha');
console.log('son11.colors',son11.colors);

var son111 = new Person11();
console.log('son111.colors',son111.colors);


//1.传递参数
function Person12(name) {
    this.name = name;
}


function Son12() {
    //继承了Person12，是如何继承的呢？？？
    Person12.call(this,'canshu');
    //实例属性
    this.age = 18;
}

var son12 = new Son12();
console.log('son12.name',son12.name);
console.log('son12.age',son12.age);
console.log('son12',son12);

//在超类型原型中定义的方法，在子类型中也无法看见
Person12.prototype.sayName = function() {
    return true;
}

//6.3.3 组合继承
// 组合继承，也叫做伪经典继承，指的是将原型链和借用构造函数的技术组合在一起，从而发挥二者之长的一种继承模式。
// 其背后的思想是：通过原型链共享属性和方法，通过借用构造函数来实现对实例属性的继承。
function Person13(name) {
    console.log('name',name);
    this.name = name;
    this.colors = ['aa','bb'];
}
//共享的方法
Person13.prototype.sayName = function() {
    return this.name;
}

function Son13(name,age) {
    //继承属性
    Person13.call(this,name);
    this.age = age;
}

Son13.prototype = new Person13();
var son13  = new Son13('秦扫六合',1);
Son13.prototype.sayAge = function() {
    return this.age;
}
son13.colors.push('123');

console.log('son13.colors',son13.colors);
//原型方法是共享的
console.log('son13.sayName',son13.sayName()); //天下
console.log('son13.sayAge',son13.sayAge());
console.log('son13.age',son13.age);

var son131 = new Son13('统一天下',2);
console.log('son131.colors',son131.colors);
console.log('son131.age',son131.age);

//原型方法是共享的
console.log('son131.sayName',son131.sayName()); //天下
console.log('son131.sayAge',son131.sayAge());

//原型式继承
//思想：借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。

function object(o) {
    //定义一个构造函数
    function F() {}
    //o是什么呢？
    F.prototype = o;
    //return 一个构造函数
    return new F();

}
//在object函数的内部，先创建了一个临时性的构造函数，然后将传入的对象将作为这个构造函数的原型对象，最后返回了这个临时类型的一个新实例。
var person14 = {
    name: '121',
    friends: ['q','w','e','r']
}

//person14是一个对象
var authorPerson = object(person14);
//看看返回的是什么？返回的是一个实例，因此person14和下文中的authorPerson、yetAuthorPerson是一样的。
console.log('authorPerson',authorPerson); //返回的是实例
authorPerson.name = '234';
authorPerson.friends.push('www');
console.log('authorPerson',authorPerson); //有自己的属性
console.log('authorPerson.friends',authorPerson.friends);


var yetAuthorPerson = object(person14);
yetAuthorPerson.name = '3333';
yetAuthorPerson.friends.push('com');
console.log('yetAuthorPerson',yetAuthorPerson);
console.log('person14.friends',person14.friends);
console.log('yetAuthorPerson.friends',yetAuthorPerson.friends);

//显然不相等
console.log('person14 == authorPerson--是否相等',person14 == authorPerson);


//
function Person15() {
    this.colors = ['q','w','e','r'];
}

function Son15() {
    Person15.call(this);
    //为何返回的是undefined，因为Person15函数，并没有return
    //console.log('Person15.call(this)',Person15.call(this)); //undefined
    //执行之后的结果打印如下：
    console.log('this.colors---',this.colors);
}

var son15 = new Son15();
son15.colors.push('123');
console.log('son15.colors',son15.colors);


var son151 = new Son15();
console.log('son151.colors',son151.colors);


//再学原型式继承
// 思路：借助原型基于已有的对象创建新的对象，同时还不必因此创建自定义类型
function object1(obj) {
    function Person16() {}
    Person16.prototype = obj;
    return new Person16();
}

var person = {
    name: '天下',
    friends: ['q','w','e','r']
}

//object1(person) 返回的是一个实例
var authorPerson1 = object1(person);
console.log('authorPerson1',authorPerson1); //是一个Person16的实例
//属性是私有的
authorPerson1.name = '晓晓';
authorPerson1.friends.push('123');
console.log('authorPerson1.friends',authorPerson1.friends);

var authorPerson2 = object(person);
authorPerson2.name = 'xiao666';
//
authorPerson2.friends.push('666');
console.log('authorPerson2',authorPerson2.friends);

//Object.create(); //规范了原型式继承
var authorPerson3 = Object.create(person);
authorPerson3.name = 'authorPerson3-name';
authorPerson3.friends.push('authorPerson3');
console.log('authorPerson3',authorPerson3);

var authorPerson4 = Object.create(person);
authorPerson4.name = 'authorPerson4-name';
authorPerson4.friends.push('authorPerson4');
console.log('authorPerson4',authorPerson4);

var anthorPerson = Object.create(person,{
    name: {
        value: 'anthorPerson-value',
    }
})
console.log('anthorPerson',anthorPerson);



//再一次理解原型式继承
function object17(obj) {
    //自定义一个构造函数
    function Person17(){}
    //把这个obj对象赋给 构造函数的原型
    //这样原型方法中有了共有的属性
    Person17.prototype = obj;
    return new Person17();
}

var person17 = {
    name: '风云突变',
    colors: ['red','blue','green'],
}
//object17(person17) 发生了什么？？？
// 1.定义一个构造函数Person17
// 2.把传入的对象赋给构造函数的原型
// 3.返回构造函数的一个实例
//执行完object17(person17)，返回的是一个实例，实例的__proto__属性指向 原型方法
var anotherPeron17 = object17(person17);
console.log('anotherPeron17',anotherPeron17); //因此这个打印出来的结果 就一目了然了。
anotherPeron17.colors.push('111');
console.log('anotherPeron17.colors',anotherPeron17.colors);

var yetanotherPerson17 = object17(person17);
console.log('yetanotherPerson17',yetanotherPerson17);
yetanotherPerson17.colors.push('222');
console.log('yetanotherPerson17.colors',yetanotherPerson17.colors);

//在进行到这一步，我们会发现anotherPeron17 === yetanotherPerson17，不行大可一试
console.log('anotherPeron17 === yetanotherPerson17',anotherPeron17 == yetanotherPerson17); //true
console.log('person17.colors',person17.colors);
//明白了，两个实例应该不会相等,我们可以验证一下
function Person18() {
    this.name = 'tianxia';
}
var person181 = new Person18();
var person182 = new Person18();

//经验证果然是不相等的
console.log('person181',person181==person182);

//存在的
function Person19() {
    this.name  = 'tianxia';
}
var person19 = new Person19();
console.log('person19',person19);


//var son19 = new Son19();

function object20(obj) {
    function Person20() {}
    Person20.prototype = obj;
    return new Person20();
}

var person20 = new Object();
person20.name = 'tianxia';
person20.age = 18;

//实例的__proto__指向的是原型方法
let another20 = object20(person20);
console.log('another20',another20);

//6.3.5 寄生式继承
function createAnother(original) {
    //通过调用函数创建一个新的对象
    //Object在这里有什么作用呢？？？
    var clone = Object(original);
    console.log('clone',clone);
    clone.sayHi = function() {
        console.log('Hi');
    }
    return clone;
}
var person = {
    name: '天下',
    colors: ['red','blue','yellow']
}
//变量名和调用的函数名不能重复吗？ 是的
var result1 = createAnother(person);
result1.sayHi();


//组合继承
function Person21(name) {
    this.name = name;
    this.colors = ['red','blue','yellow'];
}
Person21.prototype.sayName = function() {
    console.log('Person21-this.name',this.name);
}
function Son21(name,age) {
    //继承了属性
    Person21.call(this,name);
    this.age = age;
}
//继承方法
//重写原型
Son21.prototype =  new Person21();
console.log('Son21.prototype.constructor',Son21.prototype.constructor); //Person21
Son21.prototype.constructor = Son21;
console.log('Son21.prototype.constructor123',Son21.prototype.constructor); //Son21
var son21 = new Son21('天下666',18);
console.log('son21',son21);
son21.colors.push('black');
console.log('son21.colors',son21.colors);
son21.sayName();

//属性是私有的,方法是共享的
var son211 = new Son21('晓666',22);
console.log('son211.colors',son211.colors);
son211.sayName();

//字面量定义的属性和方法是实例上的还是原型上的？是否有原型方法？如果没有的话，如何添加原型方法。
var son23 = {
    name: '厉害的很',
    age: 18,
}
console.log('son23',son23);
//console.log('Object.prototype',Object.prototype);
//Object.prototype.job= '前端开发工程师';
//console.log('son23.prototype.job',son23.prototype.job);

//打印Object() 方法看看是什么？
console.log('Object()',Object()); //{}

//寄生组合式继承
//所谓寄生式组合继承，即通过借用构造函数来继续属性，通过原型链的混成形式继承方法。
//其背后的思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们需要的无非就是超类型的一个副本而已。
//本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给子类型的原型。
function  inheritPrototype(Son24,Person24) {
    //复制一个Person24原型的副本
    var proto = Object(Person24.prototype);
    //proto.constructor 指向Person24
    console.log('proto.constructor',proto.constructor); //Person24
    //如果不指定这一步会如何？
    proto.constructor = Son24;
    Son24.prototype = proto;
}

function Person24(name) {
    this.name = name;
    this.colors = ['red','yellow','blue'];
}

Person24.prototype.sayName = function() {
    return this.name;
}

function Son24(name,age) {
    Person24.call(this,name);
    this.age = age;
}

inheritPrototype(Son24,Person24);

var son24 = new Son24('tianxia',666);
son24.colors.push('haha');
console.log('son24',son24);

var son241 = new Son24('xiaoxiao',123);
son241.colors.push('dd');
console.log('son241',son241);

//方法是共享的
console.log('son24.sayName',son24.sayName());
console.log('son241.sayName',son241.sayName());
















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