import React,{ Component } from 'react';


function timeout(ms) {
    //new 一个promise实例
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(resolve,ms,'done')
    })
    //console.log('promise1',promise1);
    return promise1;
}

timeout(100).then(data=>{
    //console.log('data',data);
})


let promise = new Promise((resolve,reject)=>{
    console.log('promise-');
    //为什么要resolve();
    resolve();
});

promise.then(()=>{
    console.log('resolved-');
});

console.log('Hello-');



const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=> reject(new Error('fail')),3000);
})
//p2的resolve方法将p1作为参数
//即p2异步操作的结果返回p1异步操作结果

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve(p1),1000)
});

//p1的状态决定着p2的状态，但p2 resolve()
p2.then(data=>{
    console.log('data',data);
}).catch(err=>{
    console.log('err---',err);
});

new Promise((resolve,reject)=>{
    return resolve(2);
    console.log(22222);
}).then(data=>{
    console.log('data2',data);
})

//调用resolve和reject并不会终结promise
new Promise((resolve,reject)=>{
    resolve(1);
    console.log('promise123');
}).then(data=>{
    console.log('data',data);
})

//promise123
//1

//3.Promise.prototype.then() 它的作用是为Promise实例添加状态改变时的回调
//then方法的第一个参数是resolve状态的回调函数
//then方法返回的是一个新的Promise实例


class Promises extends Component {
    constructor(props) {
        super(props);
    }

    promises() {
        const promise = new Promise((resolve,reject)=> {
            console.log('resolve',resolve);
            console.log('reject',reject);
        }).then(res=>{
            console.log('res',res);
        }).catch(error=>{
            console.log('error',error);
        });
        console.log('promise',promise);
    }



    render() {
        return (
            <div>
                { this.promises()}
            </div>
        )
    }
}

export default Promises;