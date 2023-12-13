function binarySea(arr,target){
    let startInd = 0
    let endInd = arr.length-1

    while(startInd <= endInd){
        let meiddle =  Math.floor(startInd+(endInd-startInd)/2)
        if(arr[meiddle]==target){
            return meiddle
        }else if(arr[meiddle]<target){
            startInd = meiddle +1
        }else if(arr[meiddle] >target){
            endInd = meiddle-1
        }
    }

    return -1
}

function binaryRec(arr,target){

    return recHelper(arr,target,0,arr.length-1)
}

function recHelper(arr,target,startInd,endInd){
    if(startInd > endInd){
        return -1
    }

    let meiddle =Math.floor( startInd +(endInd - startInd)/2)
    if(arr[meiddle]==target){
        return meiddle
    }else if(arr[meiddle]>target){
        return recHelper(arr,target,startInd,meiddle-1)
    }else{
        return recHelper(arr,target,meiddle+1,endInd)
    }
}

const arr=[1,2,3,4,5,6,7,8,9]
console.log(binaryRec(arr,1));