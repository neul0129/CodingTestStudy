
let row = 1;   // 행
let column = 'a';  // 열

column = column.charCodeAt(0) - 97;  // 아스키코드를 이용

let count = 0;

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];  // 이동하는 행
const dy = [-1, -2, -2, -1, 1, 2, 2, 1];  // 이동하는 열

for(let i = 0 ; i < 8; i++){
    let x = row + dx[i];  
    let y = column + dy[i];
    if(1 <= x && x <= 8 && 1 <= y && y <= 8){
        count++;
    }
}
console.log(count);
