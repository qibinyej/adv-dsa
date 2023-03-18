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


var tree1 = new BinarySearchTree();
var tree2 = new BinarySearchTree();
tree1.insert(8);
tree1.insert(3);
tree1.insert(1);
tree2.insert(8);
tree2.insert(3);
tree2.insert(1);
tree1.same(tree1, tree2)