/**
 * Challenge 1: Draw and explain in a diagram of how the queue data structure works.
 * 
Challenge 2: Create 2 methods that are:
• enqueue (insert a element at the end of the queue)
• dequeue (remove a element from the start of the queue)

Challenge 3: Create 3 additional methods that are:
• peek (retrieves the element at the start of the queue, WITHOUT removing it)
• isEmpty (checks if the queue is empty – should return true or false)
o hint - what property of the queue can you use to build this method J?
• printQueue (prints the elements in the queue)
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) { //add to the last 
    let newNode = new Node(val)
    // if queue is empty, first and last node is the newNode
    if(this.size === 0){
      this.first = newNode;
      this.last = newNode;
    }else{
      this.last.next = newNode
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() { //remove first
    let removedNode = this.first
    if(!this.size) return;
    if(this.size === 1){
      this.first = null;
      this.last = null;
    }else{
      this.first = removedNode.next
      removedNode.next = null;
    }
    this.size--;
    return removedNode;
  }

  peek(){ //retrieves the element at the start of the queue, WITHOUT removing it
    if(!this.size){
      return
    }else{
      return this.first.value
    }
  }
  
  isEmpty(){ //return true if the queue is empty;
    if(!this.size) {
      return true;
    }else{
      return false;
    }
  
  }

  printQueue(){
    
  }

}
