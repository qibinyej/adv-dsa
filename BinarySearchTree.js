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

    BFS(){ //using queue DS
        let visited =[];
        let q = [node];
        let count = 0;
        let current = this.root;
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