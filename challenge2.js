/**
 * Challenge 2: Please solve this problem using either BFS or DFS.
Given a binary tree, create a method called countOdds(tree) that returns a object that has a SORTED list of all
odd nodes and count.
For example, given the following example:
    The following tree when passed in to the countOdds(tree) function should return something like this:
    {
    nodes: [1, 3, 7, 13],
    count: 4
    }
NOTE: countOdds(tree) takes in a argument of a tree. E.g.
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

    countOdds(){
        let oddsList = [];
        // check left
       function traverse(node){
            if(node.left){
                traverse(node.left)
            }
            //check middle
            if(node.value % 2 !== 0){
                oddsList.push(node.value)
            }
            //check right
            if(node.right){
                traverse(node.right)
            }
        }
        traverse(this.root)
        const map = {
            "nodes": oddsList,
            "count": oddsList.length
        };
        return map
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
tree.countOdds(tree)