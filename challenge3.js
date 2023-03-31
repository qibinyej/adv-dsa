/**
 * Challenge 3: Given connected and undirected graph. Perform a Depth First Traversal of Graph. 
 * Use a recursive approach to find the DFS traverasl of Graph starting from teh 0th vertex from left to right according to Graph.
 * 
 * Exmaple Input: V =5, adj = [[2,3,1], [0], [0,4], [0], [2]]
 * 
 * output: 0,2,4,3,1
 * starting from 0, then 2, 4, then 3, and 1
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

    DFSRecursive(start){ //stack DS (LIFO) 
        const result = [];
        const visited = {};
        const adjList = this.adjList
      console.log(adjList)

        (function dfs(vertex){
            visited[vertex] = true;
          // console.log(visited)
            result.push(vertex)
          // console.log(result)
          
            adjList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    dfs(neighbor)
                }     
            });
        })(start) 
      //dfs(start)
        return result;
    }
}

let g = new Graph();
g.addVertex('0')
g.addVertex('2')
g.addVertex('4')
g.addVertex('3')
g.addVertex('1')
g.addEdge("0", "2")
g.addEdge("2", "4")
g.addEdge("0", "3")
g.addEdge("0", "1")
// console.log(g)
let output = g.DFSRecursive("0")
console.log(output)
//   0
// / \ \
// 2 3  1
// | 
// 4

// RESULT: [0, 2, 4, 3, 1]


