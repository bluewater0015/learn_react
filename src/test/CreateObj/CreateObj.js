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

class CreateObj extends Component {
    render() {
        return (
            <div>CreateObj</div>
        )
    }
}
export default CreateObj;