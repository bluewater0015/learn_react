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

function MapKey(props) {
    let newArr = props.arr.map(item=>{
        return(
           <h1 key="1">{item}</h1>
        )
    })
    return newArr;
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
                <MapKey arr={arr} />
            </div>
        )
    }
}
export default Lists;