class _Node {
    value: number
    neighbours: _Node[]

    constructor(value?, neighbours?) {
        this.value = value || 0
        this.neighbours = neighbours || []
    }
}


const cloneGraph = (node: _Node | null): _Node | null => {
    if (node === null) return null;
    const clones = new Map<number, _Node>()    

    const dfs = (node: _Node): _Node | null => {
        if (node === null) return null;
        if(clones.has(node.value)) return clones.get(node.value)!

        const copy = new _Node(node.value)
        clones.set(node.value, copy)
        
        for(let neighbour of node.neighbours) {
            neighbour && copy.neighbours.push(dfs(neighbour))
        }
        return copy
    }

    return dfs(node)
}

const adjList = [[2,4],[1,3],[2,4],[1,3]]
// Build nodes
const nodes: _Node[] = [];
for (let i = 0; i < adjList.length; i++) {
    nodes[i] = new _Node(i + 1);
}

// Link neighbors (convert 1-based index to 0-based)
for (let i = 0; i < adjList.length; i++) {
    nodes[i].neighbours = adjList[i].map(idx => nodes[idx - 1]);
}

// Start node is nodes[0] (value 1)
const start = nodes[0];

// Clone using your DFS function
const cloned = cloneGraph(start);

console.log(cloned);

