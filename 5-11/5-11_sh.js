const N = 5, M = 6;
let arr = [
    [1,0,1,0,1,0],
    [1,1,1,1,1,1],
    [0,0,0,0,0,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1]
];

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

let bfs = (graph, start) => { // N = 5, M = 6
    const queue = new Queue();
    queue.enqueue(start);

    while (!queue.empty()) {
        let v = queue.dequeue();
        let x = v[0];
        let y = v[1];

        if (x == M - 1 && y == N - 1) {
            console.log("end :",arr[y][x]);
        }

        if (x + 1 < M) { // right
            if (arr[y][x+1] == 1) {
                arr[y][x+1] = arr[y][x] + 1;
                queue.enqueue([x+1,y]);
            }
        }

        if (y + 1 < N) { // down
            if (arr[y+1][x] == 1) {
                arr[y+1][x] = arr[y][x] + 1;
                queue.enqueue([x,y+1]);
            }
        }

        if (x - 1 > -1) { // left
            if (arr[y][x-1] == 1) {
                arr[y][x-1] = arr[y][x] + 1;
                queue.enqueue([x-1,y]);
            }
        }

        if (y - 1 > -1) { // up
            if (arr[y-1][x] == 1) {
                arr[y-1][x] = arr[y][x] + 1;
                queue.enqueue([x,y-1]);
            }
        }
    }
}

bfs(arr, [0,0]);