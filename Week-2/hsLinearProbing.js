class table{
    constructor(capasity){
        this.capasity = capasity
        this.table = new Array(capasity)
        this.size =0
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.capasity
    }

    set(key,value){
       if(this.size == this.capasity){
        console.log('table is full');
       }else{
        let index = this.hash(key)
        if(!this.table[index]){
            this.table[index] = [key,value]
        }else{
            while(this.table[index] !== undefined && this.table[index][0] !== key){
                index++
                if(index === this.capasity){
                    index = 0
                }
            }
            this.table[index]=[key,value]
            this.size++
        }
       }
    }

    get(key){
        let index = this.hash(key)
        let count = 0
        while(count <this.capasity){
            count++
            index++
            if(this.table[index] &&this.table[index][0]===key){
                return this.table[index][1]
            }
            if(index == this.capasity){
                index =0
            }
        }
        console.log("no key founded");
    }

    display(){
        for(let i=0;i<this.capasity;i++){
            if(this.table[i]){
                console.log(this.table[i]);
            }
        }
    }
}

const t = new table(20)
t.set('first',20)
t.set('second',30)
t.set('third',40)
console.log(t.get('second'));
