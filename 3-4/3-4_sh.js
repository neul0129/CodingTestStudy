
let solution = (N, K) => {
    let cur_num = N;
    let cnt = 0;

    while (cur_num != 1) {
        if (cur_num % K == 0) {
            cur_num = cur_num / K;
        } else {
            cur_num -= 1;
        }
        cnt += 1;
    }

    return cnt;
};

console.log(solution(25, 5));