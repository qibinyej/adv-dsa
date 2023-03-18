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

    BFSCountLeafs(){ //using queue DS, FIFO 
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

    preOrderCountLeafs(){ //using stack DS, LIFO
        let count = 0;
        function traverse(node){
            console.log(node.value)
            //handle middle first
            if(node && !node.left && !node.right ){
              console.log('found leaf at node: ' + node.value)
                count++
                return
            }
            //handle left next    
            if(node.left){
                console.log('going left at node: ' + node.left.value)
                traverse(node.left)
            //handle right last
            }
            if(node.right) {
              console.log('going right at node: ' + node.right.value)
                traverse(node.right)
            }
        }
        traverse(this.root)
       return count;
    }

    inOrderCountLeafs(){ //using stack DS, LIFO
        let count = 0;
        function traverse(node){
            // if(node.left){
            //     traverse(node.left)
            // }
            // if(node.right) {
            //     traverse(node.right)
            // }
            // count+=1
        }
        traverse(this.root)
       return count;
    }

    postOrderCountLeafs(){ //using stack DS, LIFO
        let count = 0;
        // function traverse(node){
        //     if(node.left){
        //         traverse(node.left)
        //     }
        //     if(node.right) {
        //         traverse(node.right)
        //     }
        //     count+=1
        // }
        traverse(this.root)
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
tree.BFSCountLeafs(tree)