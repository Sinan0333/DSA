class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        this.vertices.set(vertex, []);
    }

    addEdge(vertex, edge) {
        if (!this.vertices.has(vertex)) {
            this.addVertex(vertex);
        }
        if (!this.vertices.has(edge)) {
            this.addVertex(edge);
        }
        this.vertices.get(vertex).push(edge);
        this.vertices.get(edge).push(vertex); 
    }

    remove(vertexToRemove) {
        if (!this.vertices.has(vertexToRemove)) {
            console.log('Vertex is not found');
            return;
        }

        this.vertices.delete(vertexToRemove);

        for (const [vertex, edge] of this.vertices) {
            const filterEdges = edge.filter((ver) => ver !== vertexToRemove);
            this.vertices.set(vertex, filterEdges);
        }
    }

    bfs(startVertex) {
        const visited = new Set();
        const queue = [];

        visited.add(startVertex);
        queue.push(startVertex);

        while (queue.length !== 0) {
            let currentVertex = queue.shift();
            console.log(currentVertex);

            const edges = this.vertices.get(currentVertex);
            for (const edge of edges) {
                if (!visited.has(edge)) {
                    visited.add(edge);
                    queue.push(edge);
                }
            }
        }
    }

    dfs(startVertex){
        const visited = new Set()
        this.dfsHelper(startVertex,visited)
    }

    dfsHelper(vertex,visited){
        visited.add(vertex)
        console.log(vertex);
        const edges = this.vertices.get(vertex)
        for(const edge of edges){
            if(!visited.has(edge)){
                this.dfsHelper(edge,visited)
            }
        }
    }

    print() {
        for (const [vertex, edge] of this.vertices) {
            const edgeString = edge.join(', ');
            console.log(`${vertex}->${edgeString}`);
        }
    }
}

const myGraph = new Graph();

myGraph.addEdge("A", "B");
myGraph.addEdge("B", "C");
myGraph.addEdge("C", "D");
myGraph.dfs("A");
