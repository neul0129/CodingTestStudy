const N = "a1"

const X = N[0];
const Y = N[1];

const A_S = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const S_X = [2, 2, -1, 1, -2, 2, -1, 1];
const S_Y = [-1, 1, -2, -2, -1, 1, 2, 2];

let cnt = 0;

let c_x, c_y = null;

for (let i = 0; i < 8; i++) {
    c_x = A_S.indexOf(X);
    c_y = Y;

    c_x += S_X[i];
    c_y += S_Y[i];

    if(c_x < 0 || c_x > 7 || c_y < 0 || c_y > 7) {
        continue;
    }
    cnt += 1;
}

console.log(cnt)