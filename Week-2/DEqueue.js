class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class DEqueue{
    constructor(){
        this.front = null
        this.rear = null
    }

    insertFront(value){
        const node = new Node(value)
        if(!this.front){
            this.front = node
            this.rear = node
        }else{
            node.next = this.front
            this.front = node
        }
    }

    insertRear(value){
        const node = new Node(value)
        if(!this.front){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
    }

    removeFront(){
        if(!this.front){
            console.log('queue is empty');
            return
        }
        this.front = this.front.next
    }

    removeRear(){
        if(!this.rear){
            console.log('queue is empty');
            return
        }
        let current = this.front
        while(current.next !== this.rear){
            current = current.next
        }
        this.rear = current
        this.rear.next = null
    }

    display(){
        if(!this.rear){
            console.log('queue is empty');
            return
        }
        let current = this.front
        while(current){
            console.log(current.value);
            current = current.next
        } 
    }
}

const queue = new DEqueue()
queue.insertRear(20)
queue.insertRear(30)
queue.insertRear(40)
queue.removeRear()
queue.display()