class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class queue{
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(value){
        const node = new Node(value)
        if(!this.rear){
            this.front = node
            this.rear = node
        }else{
            this.rear.next = node
            this.rear = node
        }
    }

    dequeue(){
        if(!this.rear){
            console.log('queue is empty');
        }else{
            this.front = this.front.next
        }
    }

    display(){
        if(!this.rear){
            console.log('queue is empty');
        }else{
            let current = this.front
            while(current){
                console.log(current.value);
                current = current.next
            }
        }
    }
}

const q = new queue()
q.enqueue(3)
q.enqueue(4)
q.enqueue(2)
q.enqueue(9)
q.dequeue()
q.display()