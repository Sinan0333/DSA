class Node{
  constructor(value){
    this.valu = value
    this.next = null
  }
}

class stack{
  constructor(){
    this.top = null
  }

  push(valu){
    const node = new Node(valu)
    if(this.top == null){
      this.top = node
    }else{
      node.next = this.top
      this.top = node
    }
  }

  pop(){
    if(this.top === null){
      console.log('stack underflow');
    }else{
      this.top = this.top.next
    }
  }

  display(){
    if(this.top === null){
      console.log('no elements in stack');
    }else{
      let current = this.top
      while(current){
        console.log(current.valu);
        current = current.next
      }
    }
  }
}

const s = new stack
s.push(20)
s.push(30)
s.push(40)
s.display()
s.pop()
s.display()