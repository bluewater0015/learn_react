import React,{ Component } from 'react';

Array.prototype.fakeMap = function fakeMap(fn,context) {
    // console.log(typeof fn);
    // console.log('this',this);
    // if(typeof fn !=="function") {
    //     throw new TypeError("arguments[0] is not a function");
    // }

    if( typeof fn === 'function') {
        let temp = [];
        let arr  = this;
        for(let i=0;i<arr.length;i++){
            let result = fn.call(context,arr[i],i,arr);
            temp.push(result);
        }
        return temp;
    }

}

function ItemLists(props) {
    return <li>{props.value }</li>;
}

function Map(props) {
    let newArr = props.arr.map(item=>
        <ItemLists value={ item } key={item.toString()}/>
    )
    let dealArr = props.arr.map(item=>
        <ItemLists value={item} key={ item.toString() }/>
    )
    return <div>
        <ul>{newArr}</ul>
        <ul>{dealArr}</ul>
    </div>
}

class Lists extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    fake(arr) {
        let newArr = arr.fakeMap((item,index)=>{
            return item*2;
        })
        return newArr;
    }

    changeStrToObj(objStr) {
        let deal = JSON.parse(objStr,function(k,v){
            //console.log('k',k);
        })
    }

    each(obj) {
        for(let x in obj) {
            //console.log('x',x);
            //console.log(obj[x]);
            return true;
        }
        return false;
    }

    keys(obj1) {
        let res = Object.keys(obj1);
        //console.log(res.length);
    }

    // var handle = function(a) {
    //     var b=3;
    //     var tmp = function(a) {
    //         b = a + b;
    //         return tmp;
    //     }
    //     tmp.toString = function() {
    //         return b;
    //     }
    //     return tmp;
    // }
    //console.log(handle(4)(5)(6));
    fn() {
        if (!Array.prototype.map1) {
            Array.prototype.map1 = function(callback, thisArg) {

                var T, A, k;

                if (this == null) {
                    throw new TypeError(" this is null or not defined");
                }

                // 1. 将O赋值为调用map方法的数组.
                var O = Object(this);
                console.log('123',O);

                // 2.将len赋值为数组O的长度.
                var len = O.length >>> 0;

                // 3.如果callback不是函数,则抛出TypeError异常.
                if (Object.prototype.toString.call(callback) != "[object Function]") {
                    throw new TypeError(callback + " is not a function");
                }

                // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
                if (thisArg) {
                    T = thisArg;
                }

                // 5. 创建新数组A,长度为原数组O长度len
                A = new Array(len);

                // 6. 将k赋值为0
                k = 0;

                // 7. 当 k < len 时,执行循环.
                while(k < len) {

                    var kValue, mappedValue;

                    //遍历O,k为原数组索引
                    if (k in O) {

                        //kValue为索引k对应的值.
                        kValue = O[ k ];

                        // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
                        mappedValue = callback.call(T, kValue, k, O);

                        // 返回值添加到新数组A中.
                        A[ k ] = mappedValue;
                    }
                    // k自增1
                    k++;
                }

                // 8. 返回新数组A
                return A;
            };
        }
    }

    render(){
        var arr = [1,3,5,7,9];
        let arr1 = [2,4,6,8,10];
        let objStr = '{"a":1}';
        let obj = {a:1};
        let objStr2 = '{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}';

        let obj1 = {};
        return (
            <div>
                <Map arr={arr}/>
                { this.fake(arr1) }
                { this.changeStrToObj(objStr2) }
                {/*{ console.log(this.each(obj))}*/}
                { this.keys(obj1) }
                { this.fn() }
            </div>
        )
    }
}
export default Lists;