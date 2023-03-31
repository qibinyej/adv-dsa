/**
 * Challenge 2: Using the BFS (recursive or iterative) method on a undirected, unweighted graph, create a method
that returns all the even valued vertices, for example, with the following
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
 
    BFSIterative(start){ //  [1, 2, 3, 4, 5, 6]
        //queue, FIFO
        const queue =[start]
        const result = []
        const visited = {} 
        const adjList = this.adjList

        let currentVertex; //firs element removed from queue
        while(queue.length){
            currentVertex = queue.shift()
            if(currentVertex % 2 === 0 ){
                result.push(currentVertex)
            }

            adjList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor)
                }
            });
        }
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
g.addEdge("1","2")
g.addEdge("1","3")
g.addEdge("2","4")
g.addEdge("3","5")
g.addEdge("4","5")
g.addEdge("4","6")
g.addEdge("5","6")

console.log(g)
let evenValues = g.BFSIterative("1")
console.log(evenValues)
// 1
// / \
// 2 3
// | |
// 4 --- 5
// \ /
// 6
// RESULT: [2, 4, 6]