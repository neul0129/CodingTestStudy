let x = 0;  //현재 위치
let y = 0;  //현재 위치
let L = () => {x -= 1};
let R = () => {x += 1};
let U = () => {y -= 1};
let D = () => {y += 1};

let command = [R,R,U] //이동시키기 

for (const i of command) {  
    i();     
}

if(x <= 5 && y <= 5){
        if(x < 0){
                console.log("왼쪽 이동 불가.");
                x = 0;
        }
        if(y < 0){
                console.log("위쪽 이동 불가");            
                y = 0;
        }
}

console.log(x,y);