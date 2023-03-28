/**
 * Challenge 2: Using the BFS (recursive or iterative) method on a undirected, unweighted graph, create a method
that returns all the even valued vertices, for example, with the following
 */

let g = new Graph();
g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")
g.addEdge("1","2")
g.addEdge("1","3")
g.addEdge("2","4")
g.addEdge("3","5")
g.addEdge("4","5")
g.addEdge("4","6")
g.addEdge("5","6")
// 1
// / \
// 2 3
// | |
// 4 --- 5
// \ /
// 6
// RESULT: [2, 4, 6]