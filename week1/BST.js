/**
 * Challenge 1: Given the following illustrations, identify each tree as:
- Tree
- Binary Tree
- Binary Search Tree
- Not Applicable
*/
//

//tree #1: binary tree
//tree #2: binary tree
//tree #3: tree
//tree #4: binary search tree
//tree #5: n/a
//tree #6: n/a


/** 
Challenge 2: Create 3 methods that are:
• insert (inserts a node as a child of the given parent node)
• find (retrieves a given node)
• contains (returns a Boolean if a given node exists)

Challenge 3: Create 1 additional method that is:
• remove (removes a node and its children from the BST)
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) { //inserts a node as a child of the given parent node
    let newNode = new Node(value);
    if(!this.size) {
      this.root = newNode;
      return this.size;
    }
    let current = this.root;
    if(value === current.value) return;
    while(true){
      if(value < current.value){
        if(!current.left){
          current.left = newNode
          return this;
        }
        current = current.left

        // if(!current.left){
        //   current.left = newNode;
        // }else{
        //   current = current.left
        // }
      }else{ //value > current.value
        if(!current.right){
          current.right = newNode;
        }else{
          current = current.right
        }
      }
    }
    this.size++;
    return this;
  }

  find(value) {
    if(this.root) return;
    let current = this.root; 
    let found = false; //initialize value as false(not yet found)
    while(current && !found){ //current exits and not yet found
      if(value < current.value){
        current = current.left
      }else if(value > current.value){
        current = current.right
      }else{
        found = true;
      }
    }
    return current;
  }

  contains(value) {}
}
