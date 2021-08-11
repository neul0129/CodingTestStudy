const N = 5;
const A = ['R', 'R', 'R', 'U', 'D', 'D'];
let X = 0,Y = 0;

const command_list = ['L', 'R', 'U', 'D'];
const Xmove_list = [-1, 1, 0, 0];
const Ymove_list = [0, 0, -1, 1];

for (const command of A) {
    let command_idx = command_list.indexOf(command);
    if (X + Xmove_list[command_idx] < N && X + Xmove_list[command_idx] > -1 && Y + Ymove_list[command_idx] < N && Y + Ymove_list[command_idx] > -1 ) {
        X += Xmove_list[command_idx];
        Y += Ymove_list[command_idx];
    }
}

console.log(X,Y);