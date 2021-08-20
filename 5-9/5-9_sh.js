class Queue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    empty() {
        if (this._arr.length == 0) {
            return true;
        } 
        return false;
    }
}

let bfs = (graph, start, visited) => {
    const queue = new Queue();
    queue.enqueue(start);

    visited[start] = true;

    while (!queue.empty()) {
        let v = queue.dequeue();
        console.log(v);

        for (const i of graph[v]) {
            if (!visited[i]) {
                queue.enqueue(i);
                visited[i] = true;
            }
        }
    }
}

const graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7],
];

let visited = new Array(9).fill(false);

bfs(graph, 1, visited);