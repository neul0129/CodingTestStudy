//미로찾기  << 최단거리(bfs)

let graph =    [[1,0,1,0,1,0],
                [1,1,1,1,1,1],
                [0,0,0,0,0,1],
                [1,1,1,1,1,1],
                [1,1,1,1,1,1]];

const n = 5;
const m = 6;
const dx = [-1,1,0,0];
const dy = [0,0,-1,1];

class Queue {           // queue 라이브러리
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

const bfs = (x,y) => {
    const queue = new Queue();  //클래스 가져오기
    queue.enqueue([x,y]);

    while(!queue.empty()){
    xy = queue.dequeue();
    x = xy[0];
    y = xy[1];
    for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];        
        let ny = y + dy[i];
        
        if(nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

        if(graph[nx][ny] == 0) continue;

        if(graph[nx][ny] == 1){
           graph[nx][ny] = graph[x][y] + 1;
           queue.enqueue([nx,ny]);
        }
    } 
}
return graph[n-1][m-1];     //끝에 도달
}
    console.log(bfs(0,0));
