class minHeap{
    constructor(arr){
        this.arr =arr
        for(let i=this.parent(this.arr.length-1);i>=0;i--){
            this.shiftDown(i)
        }
    }

    shiftDown(curntInd){
        const endInd = this.arr.length-1
        let leftInd = this.leftChild(curntInd)
        while(endInd >= leftInd){
            let rightInd = this.leftChild(curntInd)
            let shiftInd;
            if(rightInd <= endInd && this.arr[rightInd]<this.arr[leftInd]){
                shiftInd=rightInd
            }else{
                shiftInd=leftInd
            }
            if(this.arr[curntInd]>this.arr[shiftInd]){
                this.swap(curntInd,shiftInd)
                curntInd = shiftInd
                leftInd = this.leftChild(curntInd)
            }else{
                return
            }
        }
    }

    shiftUp(currndInd){
        let parentInd = this.parent(currndInd)
        while(currndInd >0 && this.arr[parentInd]>this.arr[currndInd]){
            this.swap(parentInd,currndInd)
            currndInd = parentInd
            parentInd = this.parent(currndInd)
        }
    }

    remove(){
        this.swap(0,this.arr.length-1)
        arr.pop()
        this.shiftDown(0)
    }

    insert(value){
        this.arr.push(value)
        this.shiftUp(this.arr.length-1)
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
mHeap.insert(9)
mHeap.display()