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
    render() {
        let arr = [[1,2,3],[3,4,4,5,5],[6,7,8,9,[11,12,[12,13,[14]]]],10];
        let eachArr = [1,3,5,7,9];
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
            </div>
        )
    }
}

export default MapArr;