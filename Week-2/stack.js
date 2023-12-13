class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(value){
        const node = new Node(value)
        if(this.size==0){
            this.top = node
        }else{
            node.next = this.top
            this.top = node
        }
        this.size++
    }

    pop(){
        if(this.size ==0){
            console.log('stack underflow');
            return
        }
        this.top = this.top.next
        this.size--
    }

    display(){
        if(this.size == 0){
            console.log('stack is empty');
            return
        }
        let current = this.top
        while(current){
            console.log(current.value);
            current = current.next
        }
    }
}

const h = new stack()
h.push(3)
h.push(6)
h.push(8)
h.push(0)
h.pop()
h.pop()
h.display()