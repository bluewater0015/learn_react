import React,{ Component } from 'react';



// for(let i=0;i<5;i++) {
//     (function(a1){
//         setTimeout(function(){
//             console.log('a1',a1); // 0 1 2 3 4
//         },1000)
//     })(i)
// }

// for(let i=0;i<5;i++) {
//     (function(a1){
//         console.log('a1',a1);
//         // setTimeout(function(){
//         //     console.log('a1',a1); // 0 1 2 3 4
//         // },1000)
//     })(i)
// }

// function aa(i) {
//     console.log('aa',i);
// }
// for(var i=0;i<5;i++) {
//     setTimeout(aa(i),1000);
// }


// for(var i=0;i<5;i++) {
//     console.log('a',i); // 0 1 2 3 4
// }
// console.log('b',i); //5

// for(let i=0;i<5;i++) {
//     console.log('c',i); //0 1 2 3 4
// }
// console.log('d',d);



for(var i=0;i<5;i++) {
    setTimeout(function(){
        //console.log('e',i); //5个5
    },0);
}
//console.log('f',i); //5







class Element extends Component {

    timeoutFun() {

        for(let i=0;i<5;i++) {
            setTimeout(function(){
                //console.log('b',i); //
            },1000)
        }
        //console.log('a',i); //5
    }


    recursion() {

    }

    sum(n) {
        if( n===1) return 1;
        return this.sum(n-1) + n;
    }


    // dealArr(arr) {
    //     let endArr = [];
    //     let newArr = arr.map((item,index)=>{
    //         if(Array.isArray(item)) {
    //             endArr = endArr.concat(this.dealArr(item));
    //         } else {
    //             endArr.push(item);
    //         }
    //     })
    //     return endArr;
    // }

    dealArr(arr) {
        let newArr = [];
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === 'object') {
                let thisArr = this.dealArr(arr[i]);
                newArr = [...newArr, ...thisArr]
            } else {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
        return newArr;
    }



    render(){
        let arr = [33,1,7,[3,4,[9,10]],[6,90]];
        // console.log(this.dealArr(arr))
        this.dealArr(arr);
        // let arr1 = arr;
        // arr1[1] = 55;
        // console.log(arr);

        let url = 'https://xn-session.oppein.com/api/index.php/erp/CallCenter/record?phone=13648067563';
        return  <div>
                    <div style={{ width: 80,whiteSpace:'nowrap',overflow:'hidden',textOverflow: 'ellipsis'}}>
                        元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染元素渲染
                    </div>
                    {/*{ this.timeoutFun() }*/}
                    { this.recursion() }
                    { this.sum(100)}
                    <div>

                    </div>
                </div>
    }
}

export default Element;
