import React,{ Component } from 'react';

var result = [];
function dealJson(data) {

    data.forEach(i=>{
        //console.log('i',i);
        result.push({
            id: i.id,
            title: i.title,
        })
        i.child && dealJson(i.child);
    });
    return result;
}

//this.textInput.current.focus();
Array.prototype.fakeMap = function(fn,context) {
    let temp=[];

    for( var i=0;i<this.length;i++ ) {
        let result = fn.call(context,this[i],i,this);
        temp.push(result);
    }

    console.log(temp);
    return temp;
}

class MapArr extends Component {
    constructor(props) {
        super(props);
    }

    mapArr(arr) {
        let newArr = [];
        for(var i=0;i<arr.length;i++) {
            if(Array.isArray(arr[i])) {
                let dealArr = this.mapArr(arr[i]);
                console.log('dealArr',dealArr);
                newArr = [...newArr,...dealArr];
            }else {
                newArr.push(arr[i]);
            }
        }
        let shoArr = [...new Set(newArr)];
        let arrs = shoArr.sort((a,b)=>a-b); //a-b<0 升序
        return arrs;
    }

    dealData(data) {
        const queue = [...data];
        const result = [];
        while(true) {
            const next = queue.shift();
        }

    }

    gothrough(data) {
        const queue = [...data];
        const result = [];
        while (true) {
            const next = queue.shift();
            if (!next) {
                break;
            }
            result.push({
                id: next.id,
                title: next.title
            });
            if (Array.isArray(next.child)) {
                queue.push(...next.child);
            }
        }
        return result;
    }

    each(arr) {
       let eachArr = arr.forEach((item,index)=>{
           console.log('item',item);
           return item;
       })
        console.log('eachArr',eachArr);
    }

    map(arr) {
        let res = arr.fakeMap((item,index)=>{
            return item * 2;
        });
        console.log('res',res);
        return res;
    }

    getUrlPar(url,id) {
        let dealUrl = url.substring(1);
        let sp = dealUrl.split('&');
        let str;
        for(let i=0;i < sp.length;i++) {
            let deal = sp[i].split('=');
            if(deal[0] === id) {
                str = deal[1];
            }
        }
        console.log(str);
        return str;
    }



    mapObj(arr) {
        console.log(1);
        let arrs = [];
        for(let i=0;i< arr.length;i++) {
            if(arrs.indexOf(arr[i])===-1) {
                console.log(arr[i]);
                arrs.push(arr[i]);
            }
        }
        //console.log(arrs);
        //return arrs;
    }

    noRepeat(arr) {
        var newArr = [];
        for(var i=0,l = arr.length; i < l; i++) {
            for(var j=i+1;j<l;j++) {
                if(JSON.stringify(arr[i]) == JSON.stringify(arr[j])) j = ++i;
            }
            newArr.push(arr[i]);
        }
        return newArr;
    }

    uniqueList(array){
        var r = [];
        for(var i = 0;i < array.length; i++) {
            for(var j = i + 1; j < array.length; j++)
                //关键在这里
                if (JSON.stringify(array[i]) == JSON.stringify(array[j])) j = ++i;
            r.push(array[i]);
        }
        console.log('r',r);
        //return r;
    }
    forMap(arr) {
        for(var i=0;i<arr.length;i++) {
            for(var j=0;j<arr.length-i-1;j++) {
                var temp;
                if(arr[j]>arr[j+1]) {
                    temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }
            }
        }
        return arr;
    }

    render() {
        let arr = [[1,2,3],[3,4,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10];
        let eachArr = [1,3,5,7,9];
        let url = '?id=3&image=awesome.jpg';
        let arr1 = [2,3,4,5];
        let obj = [{a:1},{b:2},{a:1}]
        let newArr = [3,2,4,5,1,6,8];

        let json = [
            {
                "name": "手机",
                "childs": [
                    {
                        "name": "iphone",
                        "childs": [
                            {"name": "iphone x"},
                            {"name":"iphone xr"},
                            {"name":'iphone xs'},
                            {"name":'iphone xs max'}
                        ]
                    }
                ]
            },{
                "name": "华为",
                "childs": [
                    {"name": '华为mate20'},
                    {"name":'华为mate 20x'},
                    {"name": '华为nova2'}
                ]
            }
        ]
        var data = [
            {
                id: '1',
                title: 'A1',
                child: [
                    {
                        id: '4',
                        title: 'B1'
                    }
                ]
            },
            {
                id: '2',
                title: 'A2',
                child: [
                    {
                        id: '5',
                        title: 'B2',
                        child: [
                            {
                                id: '7',
                                title: 'C1',
                                child: [
                                    {
                                        id: '8',
                                        title: 'D1'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: '6',
                        title: 'B3'
                    }
                ]
            },
            {
                id: '3',
                title: 'A3'
            }
        ]

        return(
            <div>
                {/*{this.mapArr(arr)}*/}
                { console.log('dealJson',dealJson(data)) }
                {/*{ this.dealData(data) }*/}
                { console.log('gothrough',this.gothrough(data)) }
                { this.each(eachArr)}

                { this.getUrlPar(url,'id') }
                { this.map(arr1)}
                {/*{ this.mapObj(obj) }*/}
                { console.log(this.noRepeat(obj)) }
                { this.uniqueList(obj) }
                { console.log('123',this.forMap(newArr)) }
            </div>
        )
    }
}

export default MapArr;