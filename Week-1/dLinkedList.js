class Node {
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}


class linkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }


    prepend(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }

        this.size++
    }


    print(){
        
        let currt = this.head
        while(currt){
            console.log(currt.value);
            currt = currt.next
        }
    }


    reversePrint(){
        let currt = this.tail
        while(currt){
            console.log(currt.n);
            currt = currt.prev
        }
    }

    append(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.size++
    }

}



const list = new linkedList()
list.append(30)
list.append(49)
list.append(1)
list.print()
