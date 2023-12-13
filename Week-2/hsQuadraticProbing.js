class Quadratic{
    constructor(size){
        this.table = new Array(size)
        this.capacity = size
        this.size= 0
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total 
    }

    set(key,value){
        let index = this.hash(key)
        if(this.table[index %this.capacity]===undefined){
            this.table[index %this.capacity]=[key,value]
        }else{
            for(let i=1;i<=this.capacity;i++){
                index =(index +i*i) % this.capacity
                if(this.table[index ]===undefined){
                    this.table[index]=[key,value]
                    break;
                }
            }
        }
        
    }

    get(key){
        let index = this.hash(key)
        if(this.table[index %this.capacity][0] === key){
            console.log(index%this.capacity+"  "+this.table[index %this.capacity][1]);
        }else{
            for(let i=1;i<=this.capacity;i++){
                index = (index +i*i) % this.capacity
                console.log(index);
                if(this.table[index ][0] === key){
                    console.log(index+"  "+this.table[index ][1]);
                    break;
                }
            }
        }
    }
}

const table = new Quadratic(20)
table.set('name','sinan')
table.set('eman','sidan')
table.set('age',18)
table.get('eman')