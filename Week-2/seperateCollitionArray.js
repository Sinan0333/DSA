class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total %this.size
    }

    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }else{
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                sameKeyItem[1]=value
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1]
            }
        }
        return undefined
    }

    remove(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const sameKeyItem = bucket.find(item=>item[0]==key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
            }
        }
    }

    display(){
        for(let i=0;i<this.size;i++){
            if(this.table[i]){
                for(let j=0;j<this.table[i].length;j++){
                    console.log(this.table[i][j][0]+"   "+this.table[i][j][1]);
                }
            }
        }
    }
}

const table = new hashTable(20)
table.set('name','sinan')
table.set('eman','sidan')
table.remove('eman')
table.set('age',18)
table.display()
