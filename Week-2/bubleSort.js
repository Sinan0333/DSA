function bubleSort(arr){
    let sorted;
    do{
        sorted=false
        for(let i=0;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                let temp = arr[i]
                arr[i]=arr[i+1]
                arr[i+1]=temp
                sorted=true
            }
        }
    }while(sorted)

}
const arr=[1,4,6,8,2]
 bubleSort(arr)
 console.log(arr);
