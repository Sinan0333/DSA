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
        this.size=0
    }

    prepend(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }

        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.size == 0){
            this.head = node
            this.tail = node
        }else{
           this.tail.next = node
           this.tail = node
        }

        this.size++
    }

    insert(value,index){
        if(index<0 || index>this.size){
            console.log("invalid index");
            return
        }
        if(index==0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }

    }

    remove(index){
        if(index<0 || index>this.size){
            console.log('invalide index');
            return
        }
        let removeNode
        if(index == 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
    }

    removeValue(value){
        if(this.size === 0){
            console.log("List is empty");
            return
        }else{
            let removeNode
            let prev = this.head
            while(prev.next && prev.next.value !=value){
                prev = prev.next
            }
            if(prev.next){
                removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return
            }else{
                console.log("list not contain that value");
                return
            }
        }
    }

    search(value){
        if(this.size == 0){
            console.log("list is empty");
            return
        }else{
            let i=0
            let currt = this.head
            while(currt){
                if(currt.value == value){
                    return i
                }
                currt = currt.next
                i++
            }
            return "not found"
        }
    }

    reverse(){
        let prev = null
        let currt = this.head
        while(currt){
            let next = currt.next
            currt.next = prev
            prev = currt
            currt = next
        }
        this.tail = this.head
        this.head = prev
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
}

const list = new linkedList()
list.append(20)
list.append(30)
list.append(40)
list.reverse()
list.print()

