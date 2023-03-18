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