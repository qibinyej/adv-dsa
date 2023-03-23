/**
 * Challenge 3: You were just hired as a backend engineer for a new start-up to compete with LinkedIn, and your first task as a engineer was to create a undirected, unweighted graph of the first 4 users of the website. Create a Graph class that utilizes a adjacencyList to structure the graph of the mutual connections between each user.
 * 
Create the following methods:
- addVertex(v): v – vertex to add
- addEdge(v1, v2): v1 – first vertex to add, v2 – second vertex to add
- removeEdge(v1, v2): v1 – first vertex to remove, v2 – second vertex to remove
- removeVertex(v): v – vertex to remove
 */

class Graph{
    constructor(){
        this.adjList = {}; 
        /** create the empty adjacency list object, {} */
    }

    addVertex(v){
        if(!this.adjList[v]) this.adjList[v] = []
    }

    addEdge(v1, v2){
        if(this.adjList[v1].filter(el => el !== v2)) this.adjList[v1].push(v2) 
        //this.adjList[v1] returns an empty array; array.push() add vertex to the end of v1
    }
   
    removeEdge(v1, v2){
        this.adjList[v1] = this.adjList[v1].filter(el => el !== v2)
        this.adjList[v2] = this.adjList[v2].filter(el => el !== v1)
    }

    removeVertex(v){
        //while loop to remove vertices in array
        while(this.adjList[v].length){
            //remove last element in the array as long as the adjacency list exists
            let adjVertex = this.adjList[v].pop()
            //remove edges between two vertcies
            this.removeEdge(v, adjVertex)
        }
        //remove the vertex key and emtpy array
        delete this.adjList[v]
    }
}

const graph = new Graph()

graph.addVertex('Tom Brady')
graph.addVertex('Tony Kim')
graph.addVertex('Patrick Mahomes')
graph.addVertex('Lebron James')

/**
 * Step 1: Seed some data - here is the list of friends and their initial mutual connections:
- Tom Brady: [‘Lebron James’, ‘Tony Kim’]
- Tony Kim: [‘Patrick Mahomes’, ‘Lebron James’, ‘Tom Brady’]
- Patrick Mahomes: [‘Lebron James’]
- Lebron James: [‘Tom Brady’, ‘Tony Kim’, ‘Patrick Mahomes’]

 */
graph.addEdge('Tom Brady', 'Lebron James')
graph.addEdge('Tom Brady', 'Tony Kim')
graph.addEdge('Tony Kim', 'Patrick Mahomes')
graph.addEdge('Tony Kim', 'Lebron James')
graph.addEdge('Tony Kim', 'Tom Brady')
graph.addEdge('Patrick Mahomes','Tom Brady')
graph.addEdge('Lebron James','Tom Brady')
graph.addEdge('Lebron James','Tony Kim')
graph.addEdge('Lebron James','Patrick Mahomes')

/**
 * Step 2: Lebron James no longer wants a account on our platform, go ahead and remove the connection between
those connections. Should look like this:
- Tom Brady: [‘Tony Kim’]
- Tony Kim: [‘Patrick Mahomes’, ‘Tom Brady’]
- Patrick Mahomes: []
 */
graph.removeEdge('Tom Brady', 'Lebron James')
graph.removeEdge('Tony Kim', 'Lebron James')
graph.removeEdge('Patrick Mahomes', 'Lebron James')

graph.removeVertex('Lebron James')
