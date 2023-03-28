/**
 * Challenge 1: Using the DFS (recursive or iterative) method on a undirected, unweighted graph, create a method
that returns all the odd valued vertices, for example, with the following
 */

class Graph{
    constructor(){
        this.adjList = {};
    }

    addVertex(vertex){
        if(!this.adjList[vertex]){
            this.adjList[vertex] = []
        }
    }
    addEdge(v1, v2){
        if(this.adjList[v1] && this.adjList[v2]){
            console.log(this.adjList[v1] = v2)
            // this.adjList[v2] = v1;
        }
    }

}

let g = new Graph();
g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")
z
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
// 4 - 5
// \ /
// 6
// RESULT: [1, 3, 5]