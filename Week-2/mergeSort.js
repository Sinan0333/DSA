function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    const mid =Math.floor(arr.length/2) 
    const left = arr.slice(0,mid)
    const right = arr.slice(mid)
    return merge(mergeSort(left),mergeSort(right))
}

function merge(leftArr,rightArr){
    const sortArr = []
    while(leftArr.length&&rightArr.length){
        if(leftArr[0]<=rightArr[0]){
            sortArr.push(leftArr.shift())
        }else{
            sortArr.push(rightArr.shift())
        }
    }
    return [...sortArr,...leftArr,...rightArr]
}

const arr=[2,4,6,1,9]
console.log(mergeSort(arr));