function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let currnt = arr[i]
        let j=i-1
        while(j >=0 && arr[j] > currnt){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=currnt
    }
}

const arr=[3,5,2,7,9]
insertionSort(arr)
console.log(arr);