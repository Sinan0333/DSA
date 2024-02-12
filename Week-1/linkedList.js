class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size=0
    }

    prepend(value){
        const node = new Node(value)
        if(this.size === 0){
            this.head = node
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
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
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

    printRev(node = this.head){
        if(node.next === null){
            return node.value
        }
      return this.printRev(node.next)
    }
}

const list = new linkedList()
list.append(2)
list.append(3)
list.append(5)
list.append(6)
list.append(7)
console.log(list.printRev());


