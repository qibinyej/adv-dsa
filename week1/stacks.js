/*
Challenge 2: Create 2 methods that are:
• push (insert a element to the top of the stack)
• pop (remove a element from the top of the stack)
**/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
  }

  push(val){ //add to the end
    let newNode = new Node(val)
    if(!this.size){
        this.top = newNode;
        this.bottom = newNode;
    }else{
        newNode.next = this.top;
        this.top = newNode;
    }
    this.size++;
    return this;
  }
  
  pop(){ // remove the last node
    if(!this.size) return;
    let removedNode = this.top;
    if(this.size === 1 ){
        this.top = null;
        this.bottom = null;
    }else{
        this.top = this.top.next //removedNode.next
        removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }
}
