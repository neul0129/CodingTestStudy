const M = 3;
const N = 3;
const arr = [[3,1,2],[4,1,4],[2,2,2]];

let global_max, local_min = 0;

for(let i = 0; i < N; i ++) {
    local_min = Math.min(...arr[i]);

    if (global_max < local_min)
        global_max = local_min;
}

console.log(global_max);