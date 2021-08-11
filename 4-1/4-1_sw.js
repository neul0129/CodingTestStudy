let x = 0;
let y = 0;
let L = () => {x -= 1};
let R = () => {x += 1};
let U = () => {y -= 1};
let D = () => {y += 1};
let command = [R,R,D]
while(x <= 5 && y <= 5){
        if(x < 0){
                console.log("왼쪽 이동 불가.");
                break;
        }
        if(y < 0){
                console.log("위쪽 이동 불가");            
                break;
        }
}

console.log(x,y);