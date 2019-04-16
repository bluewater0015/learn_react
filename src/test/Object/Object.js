import React,{ Component } from 'react';


//创建自定义最简单的方法就是创建一个Object的实例，然后再为它添加属性和方法。
function personFun() {
    var person = new Object();
    person.name = 'tianxia';
    person.age = 18;

    person.sayName = function() {
        //console.log('person.name',this);
    }
    person.sayName();
}
//personFun();

function obj() {
    var obj = {
        name: 'tianxia',
        age: 18,
        sayName: function() {
            //console.log('this.name',this.name);
        }
    }
    obj.sayName();
}

function personFun1() {
    var person1 = {
        name: 'xiaoxiao',
        age: 22,
    }
    Object.defineProperty(person1,'name',{
        //writable: false,
        value: 'tianxia',
        configurable: false,
    });
    Object.defineProperty(person1,'name',{
        //writable: false,
        //value: 'tianxia123',
        //configurable: true,
    });
    //console.log('person1',person1);
    person1.name = '天下';
    //console.log('person2',person1);
    //delete person1.name;
    //console.log(3,person1);
}


function books() {
    var book = {
        _year: 2019,
        edition: 1,
    }
    Object.defineProperty(book,'year',{
        // get: function() {
        //     return this._year;
        // },
        set: function(newValue) {

            if(newValue > 2019) {
                this._year = newValue;
                this.edition += newValue - 2019;
            }

        }
    });
    book.year = 2020;
    //console.log('book.edition',book.edition);
}
books();

function createPerson(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        //console.log(this.name);
    }
    return o;
}

var person1 = createPerson('tianxia1',18,'web前端工程师');
person1.sayName();
var person2 = createPerson('xiaoxiao1',22,'我要成为王者');

//对象无法识别
//console.log('typeof1',typeof person1);
//console.log('typeof2',typeof person2);

function Person(name,age,job) {
    //为何this是Person 因为将构造函数的作用域赋给新对象
    //console.log('this',this);
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}

//实例 就是一个对象
//
var person3 = new Person('tianxia2',18,'web前端工程师');
var person4 = new Person('xiaoxiao2',22,'我要成为王者');
//person3.sayName();
//console.log(person3.constructor == Person);
//console.log(person4.constructor == Person);

//console.log('person3',person3.constructor);
//console.log('person4',person4);
//console.log(person3 instanceof Person);
//console.log(person4 instanceof Person);

//console.log('是否等于',person3.sayName == person4.sayName); //false

function Person1(name,age,job) {
    //console.log('this',this); //为何this是Person
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    }
}
var person5 = new Person1('xiaoxiao2',22,'我要成为王者');
///console.log('person5 instanceof Person',person5 instanceof Person1);


function Animal(name) {
    this.name = name;
    this.sayName = sayName;
}
var animal1 = new Animal('cat');
animal1.sayName();
var animal2 = new Animal('dog');
animal2.sayName();

console.log('Animal',Animal.prototype);
function sayName() {
    console.log(this.name);
}

function Plant(age) {
    //this.name = name;
    this.age = age;
}
Plant.prototype.name = '郁金香';
Plant.prototype.sayName = function() {
    console.log('this.name',this.name);
}
var plant1 = new Plant(18);
plant1.sayName();
var plant2 = new Plant(22);
plant2.sayName();

console.log('plant1',plant1);
console.log('plant1.sayName',plant1.sayName == plant2.sayName);
console.log('plant1._proto_',plant1._proto_);

//isPrototypeOf 确定对象之间是否存在这种关系
console.log('isPrototypeOf',Plant.prototype.isPrototypeOf(plant1));

//Object.getPrototypeOf() //返回原型的值
console.log('getPrototypeOf1',Object.getPrototypeOf(plant1)); //Plant.prototype
console.log('getPrototypeOf2',Object.getPrototypeOf(plant1).name); //郁金香

console.log('hasPrototypeProperty1',hasPrototypeProperty(plant1,'name')); //true

//给实例对象添加一个属性
plant1.name = '1234';
console.log('hasPrototypeProperty2',hasPrototypeProperty(plant1,'name')); //false
console.log('plant1.name',plant1.name); //来自于实例
console.log(plant2.name); //来自于原型对象
delete plant1.name;


console.log('plant1.name-1',plant1.name); //来自于实例

//hasOwnProperty() 方法可以检测一个属性是否存在实例中,
console.log('----方法可以检测一个属性是否存在实例中,存在实例对象中返回true----');
console.log(plant1.hasOwnProperty('name'));  //true
console.log(plant2.hasOwnProperty('name'));  //false
console.log('name' in plant1);
console.log('name' in plant2);

//通过hasOwnProperty() 和 in 就可以确定该属性存在对象中还是存在实例中, true为存在原型对象中，false存在于实例中。
function hasPrototypeProperty(object,name) {
    return !object.hasOwnProperty(name) && (name in object);
}
console.log('hasPrototypeProperty3',hasPrototypeProperty(plant1,'name'));


function Per() {

}
Per.prototype.name = 'tianxia';
Per.prototype.age= 18;
Per.prototype.job = 'web前端';
Per.prototype.sayName = function() {
    console.log(this.name);
}

//Object.Keys();
var keys = Object.keys(Per.prototype);
console.log('keys',keys); //["name", "age", "job", "sayName"]

var per1 = new Per();
per1.name = 'xiaoxiao';
per1.age = 22;
var per1keys = Object.keys(per1);
console.log('per1keys',per1keys);
var key = Object.getOwnPropertyNames(Per.prototype);
console.log('key',key);


function Dog() {

}

Dog.prototype = {
    constructor: Dog,
    name: '狗狗',
    age: 18,
    frends: ['tianxia','xiao'],
    writeName: function() {
        console.log('this.name',this.name);
    }
}
var dog1 = new Dog();
var dog2 = new Dog();

console.log(dog1 instanceof Object);
console.log(dog1 instanceof Dog);

console.log('---');
console.log(dog1.constructor == Dog); //false
console.log(dog1.constructor == Object); //true

console.log('Gog.prototype',Dog.prototype.constructor);
dog1.writeName();

// Object.defineProperty(Dog.prototype,'constructor',{
//     enumerable: false,
//     value: Dog,
// })

var Dogkeys = Object.keys(Dog.prototype);
console.log('Dogkeys',Dogkeys);

dog1.frends.push('aa');

console.log('dog1.frends',dog1.frends);
console.log('dog2.frends',dog2.frends);
console.log(dog1.frends == dog2.frends);


//组合使用构造函数模式和原型模式
function PersonY(name,age,job) {
    console.log('PersonY-this',this);
    this.name = name;
    this.age = age;
    this.job = job;
    this.frends = ['111','2222'];
}

PersonY.prototype = {
    constructor: PersonY,
    sayName: function() {
        console.log(this.name);
    }
}


var personY1 = new PersonY('天下',18,'WEB前端工程师');
var personY2 = new PersonY('小小',22,'王者天梯');
personY1.frends.push('3333');
console.log('personY1.frends',personY1.frends);
console.log('personY2.frends',personY2.frends);

personY1.sayName()
personY2.sayName()
console.log(personY1.sayName == personY2.sayName);


function A() {

}
let a = A();
console.log('a',a);
let b = new A();
console.log('b',b);
function B() {
    return {a:1}
}
let c = B();
console.log('c',c);
let d = new B();
console.log('d',d);


function PersonX(name,age,job) {
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    }
    //在这里return和不return 有什么区别呢？
    return o;
}
var personX1 = new PersonX('天下',18,'web前端');
console.log('personX1',personX1); //如果没有return 会返回{},否则的话会返回{name: "天下", age: 18, job: "web前端", sayName: ƒ}

//构造函数 SpecialArray
function SpecialArray() {
    console.log('this',this);
    //创建数组 values是数组的一个实例
    var values = new Array();

    //添加值
    values.push.apply(values,arguments);

    //添加方法
    values.toPipedString = function() {
        //return this.join('|');
    }
    //返回数组
    return values;
}
//实例colors为何可以调用实例中的方法和原型中的方法？

var colors = new SpecialArray('tianxia','xiao','aaa');
console.log('colors',colors);
//console.log('toPipedString',colors.toPipedString());

//join() 就是把数组中所有的元素放入一个字符串，元素是通过指定的分隔符分隔的


function PersonXY(name,age) {
    //这里的this指向谁呢？

    this.name = name;
    this.age = age;
    //this指向实例 personXY1
    console.log('PersonXY-this-这里的this指向谁呢？',this);
}
var personXY1 = new PersonXY('tianixa',18);


function SpecialArray1() {
    var values = new Array();

    //arguments 是什么
    console.log('arguments',arguments);
    values.push.apply(values,arguments);

    //添加方法
    values.toPipedString = function() {
        return this.join('-');
    }

    //返回数组
    return values;
}
var colors = new SpecialArray1('red','yellow','blue');
console.log('colors---',colors.toPipedString());

//6.2.7 稳妥构造函数模式
function Person123(name,age) {
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sayName = function() {
        console.log('obj.name',obj.name);
    }
    return obj;
}

let person123 = Person123('天下',18);
person123.sayName();
//和工厂模式有什么区别呢？？？
//不使用this

class Objects extends Component {
    render() {
        return(
            <div>
                Objects
            </div>
        )
    }
}

export default Objects;