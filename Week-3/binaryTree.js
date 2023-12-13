class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(root.value > node.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        }
        if (value === root.value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value);
        } else {
            return this.search(root.right, value);
        }
    }
    

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    leverlOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curnt = queue.shift()
            console.log(curnt.value);
            if(curnt.left){
                queue.push(curnt.left)
            }
            if(curnt.right){
                queue.push(curnt.right)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root == null){
            return root
        }
        if(root.value > value){
            root.left = this.deleteNode(root.left,value)
        }else if(root.value < value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }else{
                root.value = this.min(root.right)
                root.right = this.deleteNode(root.right,root.value)
            }
        }
        return root
    }


}

const bts = new binarySearchTree()
bts.insert(10)
bts.insert(8)
bts.insert(12)
bts.insert(5)
bts.insert(9)
bts.insert(11)
bts.insert(15)
console.log(bts.search(49));