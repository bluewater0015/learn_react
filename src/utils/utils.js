
export function dealArr(arr) {
    let newArr = arr.map((item,index)=>{
        return item * 2;
    })
    return newArr;
}

export function sum(num) {
    return ++num;
}
