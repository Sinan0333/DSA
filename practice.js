class Graph{
    constructor(){
        this.vertices = new Map()
    }

    addVertex(vertex){
        this.vertices.set(vertex,[])
    }

    addEdge(vertex,edge){
        if(!this.vertices.has(vertex)){
            this.addVertex(vertex)
        }
        if(!this.vertices.has(edge)){
            this.addVertex(edge)
        }
        this.vertices.get(vertex).push(edge)
        this.vertices.get(edge).push(vertex)
    }

    remove(rmVertex){
        if(!this.vertices.has(rmVertex)){
            console.log('vertex is not available');
            return
        }
        this.vertices.delete(rmVertex)
        for(const [vertex,edge] of this.vertices){
            const filterEdges = edge.filter((ver)=>ver != rmVertex)
            this.vertices.set(vertex,filterEdges)
        }
    }

    bfs(startVertex){
        let visited = new Set()
        let queue = []

        visited.add(startVertex)
        queue.push(startVertex)

        while(queue.length !==0){
            let curnt = queue.shift()
            console.log(curnt);
            const edges = this.vertices.get(curnt)
            for(const edge of edges){
                if(!visited.has(edge)){
                    visited.set(edge)
                    queue.push(edge)
                }
            }
        }

    }
}

const g = new Graph()
g.addEdge('A','B')
g.addEdge('C','D')
g.bfs()