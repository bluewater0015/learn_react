import React,{ Component } from 'react';

function sayName(obj) {
    obj.name = 'tianxia';
    obj = new Object();
    obj.name = '晓';
    console.log('result1',obj);
}
var obj1 = new Object();
sayName(obj1);
console.log('obj1',obj1);

var obj2 = new Object();

function setName2(obj) {
    obj.name = 'xiaoxiao';
    obj = new Object();
    obj.name = '我喜欢你';
}
let result = setName2(obj2);
console.log('result',obj2);

//按值传递
var num = 10;
function addTo(num) {
    var result = num + 10;
    return result;
}
var res = addTo(num);
console.log('res',res); //20
console.log('num',num); //10

function add(num1,num2) {
    var sum = num1 + num2;
    return sum;
}
var result2 = add(10,20);
console.log('result2',result2);
//console.log('sum',sum);

function problem() {
    var ObjectA = new Object();
    var ObjectB = new Object();

    ObjectA.name = ObjectB;
    ObjectB.age = ObjectA;

    console.log('ObjectA',ObjectA);
    console.log('ObjectB',ObjectB);
}
problem();

//ECMAScript中所有的参数都是按值传递的。
function addObj(obj3) {
    obj3.name = '天下';
    obj3 = new Object();
    obj3.name = '晓晓';
    var obj6 = new Object();
    return obj3;
}
var obj3 = new Object();
var result3 = addObj(obj3);
console.log('result3',result3);
console.log('obj3',obj3); //天下
//console.log('obj6',obj6); //因为obj6是局部对象，因此会是undefined


function sum3(num3) {
    //局部变量，在执行完之后摧毁。
    num3 += num3;
    return num3;
}
var num3 = 10;
let result33 = sum3(num3);
console.log('result33',result33); //20
//按值传递，不会影响原本的值，为何？
//全局变量，在这里只能打印出全局的变量num3。
console.log('num3',num3); //10

//
var obj4 = new Object();
obj4.name = '天下';
var obj5 = obj4;
obj5.name = '123';

console.log('obj5',obj5);

function arrFn() {
    console.log('arguments123',arguments.length);
}
let arr = ['yellow','blue','green'];
arrFn(arr,22,33);

var color = 'blue';
function changeColor() {
    if(color == 'blue') {
        color = 'red';
    }else {
        color = 'blue';
    }
}
changeColor();
console.log('Color is now:',color);

//在局部作用域中定义的变量可以在局部环境和全局环境中互换使用。
var color1 = 'red';
function changeColor1() {
    var another = 'yellow';
    function swap() {
        var swapNum = another;
        another = color1;
        color1 = swapNum;
    }
    swap();
    //在这里可以访问color1和another变量
    console.log('color1-1',color1);
    console.log('another',another);
}
changeColor1();
console.log('color1',color1); //red

if(1) {
    var color2 = 'blue';
}
console.log('color2',color2);

for(var i=0;i<5;i++) {
    console.log('里面也是',i); // 0 1 2 3 4
}
console.log('i-1',i); //5

var array = new Array();
console.log('array',array);

class CreateObj extends Component {
    render() {
        return (
            <div>CreateObj</div>
        )
    }
}
export default CreateObj;