class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }


    append(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next= node
            this.tail=node
        }
        this.size++
    }


    print(){
        if(this.size === 0){
            console.log("list is empty");
        }else{
            let currt = this.head
            while(currt){
                console.log(currt.value);
                currt =  currt.next
            }
        }
       
    }

    search(index){
        if(this.size== 0){
            console.log('llist is empty');
        }else{
            let currt= this.head
            let rev=this.size-index
            for(let i=0;i<rev-1;i++){
                currt=currt.next
            }
            console.log(currt.value);
        }
    }

    removeInd(index){
        if(this.size == 0){
            console.log("list is empty");
        }else{
            let currt = this.head
            for(let i=0;i<index-i;i++){
                currt=currt.next
            }
           let next = currt.next
           currt.next=next.next
           this.size--
        }
    }

    removeValue(value){
        if(this.size == 0){
            console.log("list is empty");
        }else{
            let currt = this.head
            while(currt &&currt.next.value !=value){
                currt = currt.next
            }
            if(currt){
                let next = currt.next
                currt.next = next.next
                this.size--
            }else{
                console.log("cannot find value");
            }
        }
    }

    insAfter(insValue,value){
        if(this.size==0){
            console.log("list is empty");
        }else{
            const node = new Node(value)
            let currt = this.head
            while(currt &&currt.value != insValue){
                currt = currt.next
            }
            if(currt){
                let next = currt.next
                currt.next = node
                node.next = next
                this.size ++
            }else{
                console.log('cannot find the value');
            }
        }
    }


}

const list = new linkedList()

list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(7)
list.insAfter(7,10)
list.print()

