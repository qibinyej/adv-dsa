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
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    DFSRecrusive(start){ //take a vertex as a starting point
        //create an array to hold result values: odd valued vertices
        const result = [];
        //create an obj to hold visited vertices: {key: true}
        const visited = {};
        // create a varialbe to hold adjacency list
        const adjList = this.adjList;

        //create self-invoking function include conditions to traverse: vertex/2 !==0
        (function dfs(vertex){
                visited[vertex] = true;
                if((vertex % 2) !== 0){
                   result.push(vertex)
                }              
                adjList[vertex].forEach(neighbor => {
                    if(!visited[neighbor]){
                        dfs(neighbor)
                    }
                })   
            })(start)
            
        return result;
    }
}

let g = new Graph();
g.addVertex("1")
g.addVertex("2")
g.addVertex("3")
g.addVertex("4")
g.addVertex("5")
g.addVertex("6")
g.addEdge("1","3")
g.addEdge("1","2")
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