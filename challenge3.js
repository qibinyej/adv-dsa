/**
 * Challenge 3: Please solve this problem using either BFS or DFS.
Given two binary trees, create a method called same(tree1, tree2) that returns true or false if the two binary
trees are the same!
For example, given the following example:
    The following tree when passed in to the same(tree1, tree2) function should return something like this:
    true
    NOTE: same(tree1, tree2) takes in a argument of tree1 and tree2. E.g.
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

    same(tree1, tree2){
        let sametree = true
        function traverse(node1, node2){
            //check middle
            if(node1 && !node2 || !node1 && node2){
                 sametree = false
                 return
            }

            if(node1 && node2){
                if(node1.value !== node2.value){
                    sametree = false
                    return
                }
            }
            //check left
            //if(node1.left && node2.left){
                traverse(node1.left, node2.left)
            //}
            
            //check right
            //if(node1.right && node2.right){
                traverse(node1.right, node2.right)
            //}
        }
        traverse(tree1.root, tree2.root)
        return sametree
    }
}

var tree1 = new BinarySearchTree();
var tree2 = new BinarySearchTree();
tree1.insert(8);
tree1.insert(3);
tree1.insert(1);
tree2.insert(8);
tree2.insert(3);
tree2.insert(1);
tree1.same(tree1, tree2)