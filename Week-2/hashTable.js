class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0; i<key.length; i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        const index = this.hash(key)
        if(this.table[index]){
            return this.table[index]
        }else{
            return false
        }
    }

    remove(key){
        const index = this.hash(key)
        if(this.table[index]){
            this.table[index]=undefined
        }else{
            console.log('key not available');
        }
        
    }

    display(){
        for(let i=0 ; i<this.size;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const table = new hashTable(20)
table.set('name','sinan')
table.set('age',18)
console.log(table.get('hg'));

table.display()
