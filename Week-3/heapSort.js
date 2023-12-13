function heapSort(arr){
    let n = arr.length
    for(let i=Math.floor(n/2)-1;i>=0;i--){
        maxHeap(arr,n,i)
    }
    for(j=n-1;j>=0;j--){
        swap(arr,0,j)
        maxHeap(arr,j,0)
    }
}

function maxHeap(arr,size,ind){
    const leftInd = 2*ind+1
    const rightInd = 2*ind+2
    let large=ind
    if(rightInd < size && arr[rightInd]>arr[large]){
        large = rightInd
    }
    if(leftInd < size && arr[leftInd] > arr[large]){
        large = leftInd
    }
    if(large!==ind){
        swap(arr,large,ind)
        maxHeap(arr,size,large)
    }
}

function swap(arr,i,j){
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j]= temp
}

const arr = [3,5,1,8,9]
heapSort(arr)
console.log(arr);