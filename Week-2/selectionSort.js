function selectionSort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
}
const arr=[3,4,6,1,8]
selectionSort(arr)
console.log(arr);