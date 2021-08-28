let bfs = (graph, start, visited) => {
    let queue = deque([start]);
    visited[start] = true;
    while(!queue.empty){
        const v = queue.pop();
        console.log(v);

        for (const i of graph[v]) {
            if(visited[i].empty){
                queue.append(i);
                visited[i] = true;
            }
        } 
    }
}

graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
];

visited = [false] * 9;

bfs(graph, 1, visited);