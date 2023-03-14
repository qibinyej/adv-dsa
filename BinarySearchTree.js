/**
 * Challenge 1: Please solve this problem using BFS & DFS.
Given a binary tree, create a method called countLeafs(tree) that returns the count of all the LEAFS of the tree.
For example, given the following example:
The following tree when passed in to the countLeafs(tree) function should return 3.
NOTE: countLeafs(tree) takes in a argument of a tree. E.g.
Set-up:
In order to create a tree to test, for example for the following above, you can create this tree like so:
 */
class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value)
        let current = this.root;
        if(!this.root){
            return this.root = newNode;
        }
        while(true){
            if(value === current.value) return;
            if(value < current.value){
               if(!current.left){
                current.left = newNode;
                } 
                current = current.left
            }
            if(value > current.value){
                if(!current.right){
                current.right = newNode;
                }
                current = current.right
            }
        }
        return current;
    } 

    countLeafs(){ //using queue DS 
        let count = 0;
        let node = this.root;
        let queue = [node];
        if(this.root === null) return 0;
        while(queue.length){
            let node = queue.shift()
           if(!node.left && !node.right){
            count += 1;
            }
            if(node.left){
               queue.push(node.left)
            }
            if(node.right){
               queue.push(node.right)
            }
        }
        return count;
    }
}

var tree = new BinarySearchTree();
tree.insert(8);
tree.insert(3);
tree.insert(1);
tree.insert(6);
tree.insert(4);
tree.insert(7);
tree.insert(10);
tree.insert(14);
tree.insert(13);
tree.countLeafs(tree)