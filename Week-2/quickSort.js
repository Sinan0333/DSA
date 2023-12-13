function quickSort(arr){
    return quickSortHelper(arr,0,arr.length-1)
}

function quickSortHelper(arr,startInd,endInd){
    if(startInd>=endInd){
        return
    }
    let pivot = startInd
    let left = startInd+1
    let right = endInd
    while(left <= right){
        if(arr[pivot] < arr[left] && arr[pivot] > arr[right]){
            swap(arr,left,right)
            left++
            right--
        }
        if(arr[pivot] >= arr[left]){
            left++
        }
        if(arr[pivot] <= arr[right]){
            right--
        }
    }
    swap(arr,right,pivot)
    quickSortHelper(arr,startInd,right-1)
    quickSortHelper(arr,right+1,endInd)
}

function swap(arr,i,j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

const arr=[32,4,8,10,2,5]
quickSort(arr)
console.log(arr);