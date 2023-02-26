/*
Challenge 2: Create 2 methods that are:
• push (insert a element to the top of the stack)
• pop (remove a element from the top of the stack)

 * Challenge 3: Create 3 additional methods that are:
• peek (retrieves the element at the top of the stack, WITHOUT removing it)
• isEmpty (checks if the stack is empty – should return true or false)
o hint - what property of the stack can you use to build this method?
• printStack (prints the elements in the stack)
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

  peek(){ // retrieves the element at the top of the stack, WITHOUT removing it
    if(!this.size){
        return;
    } else{
        return this.top;
    }
  } 

  isEmpty(){ // checks if the stack is empty – should return true or false
    if(this.size === 0){
        return true;
    }
    return false;
  } 

  printStack(){ // prints the elements in the stack
    if(!this.size){
        console.log('This stack is empty')
    }else{
        console.log(this);
    }
  } 
  
}


