class minHeap{
    constructor(arr){
        this.arr =arr
        this.length = arr.length-1
        for(let i=this.parent(this.arr.length-1);i>=0;i--){
            this.shiftDown(i)
        }
        for(let j=0;j<arr.length;j++){
            this.sort()
        }

    }

    shiftDown(curntInd){
        const endInd = this.length
        let leftInd = this.leftChild(curntInd)
        while(endInd >= leftInd){
            let rightInd = this.rightChild(curntInd)
            let shiftInd;
            if(rightInd <= endInd && this.arr[rightInd]>this.arr[leftInd]){
                shiftInd=rightInd
            }else{
                shiftInd=leftInd
            }
            if(this.arr[curntInd]<this.arr[shiftInd]){
                this.swap(curntInd,shiftInd)
                curntInd = shiftInd
                leftInd = this.leftChild(curntInd)
            }else{
                return
            }
        }
    }


    sort(){
        this.swap(0,this.length)
        this.length--
        this.shiftDown(0)
    }


    parent(i){
        return Math.floor( ( i - 1 ) / 2 );
    }
    leftChild(i){
        return (i*2)+1
    }
    rightChild(i){
        return (i*2)+2
    }

    swap(i,j){
        const temp =this.arr[i]
        this.arr[i]=this.arr[j]
        this.arr[j]=temp
    }


    display(){
        for(let i=0;i<this.arr.length;i++){
            console.log(this.arr[i]);
        }
    }
    
}
const arr=[10,5,12,3,7,11,15,1,4,6,8]
const mHeap = new minHeap(arr)
console.log(arr);