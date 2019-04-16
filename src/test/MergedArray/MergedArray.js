import React,{ Component } from 'react';
import { dealArr,sum} from './../../utils/utils';
class MergedArray extends Component {
    constructor(props) {
        super(props);
    }

    mergedArray(arr,result) {
        return arr.map((item,index)=> {
            return {
                deal: item.filterName + result[index].total
            }
        })

    }

    render() {
        let result = [
            { total: 12},
            { total: 23},
            { total: 12},
            { total: 34},
            { total: 13},
            { total: 14},
            { total: 23},
            { total: 34},
        ]

        let arr = [
            { filterId: 1,filterName: '待解决工单'},
            { filterId: 2,filterName: '已解决工单'},
            { filterId: 3,filterName: '解决中工单'},
            { filterId: 4,filterName: '今日工单'},
            { filterId: 5,filterName: '说话1'},
            { filterId: 6,filterName: '说话2'},
            { filterId: 7,filterName: '说话3'},
            { filterId: 8,filterName: '说话4'},
        ];
        let arr1 = [1,3,5,7,9];
        let num = 1;
        return (
            <div>
                { console.log('this.mergedArray(arr,result)',this.mergedArray(arr,result)) }
                <ul>
                    {
                        dealArr(arr1).map(item=>{
                            return <li>{item}</li>
                        })
                    }
                </ul>
                {
                    sum(num)
                }
            </div>
        )
    }
}

export default MergedArray;