const N = 4, M = 5;
let arr = [
    [0,0,1,1,0],
    [0,0,0,1,1],
    [1,1,1,1,1],
    [0,0,0,0,0]
];
let cnt = 0;

let dfs = (graph, y, x) => {

    if (x >= M || x < 0 || y < 0 || y >= N || graph[y][x]!=0) {
        return;
    }
    graph[y][x] = 2;
    
    dfs(graph, x+1, y);
    dfs(graph, x-1, y);
    dfs(graph, x, y+1);
    dfs(graph, x, y-1);

}

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (arr[i][j] == 0) {
            cnt++;
            dfs(arr, i, j);
        }
    }
}

console.log(cnt);