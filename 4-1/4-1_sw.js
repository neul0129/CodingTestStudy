let x = 1;  //현재 위치
let y = 1;  //현재 위치
let L = () => {x -= 1};
let R = () => {x += 1};
let U = () => {y -= 1};
let D = () => {y += 1};

let prev_x = 0;
let prev_y = 0;

let command = [R,R,R,U,D,D] //이동시키기 

for (const i of command) {  
    prev_x = x;
    prev_y = y;
    i();     
    
        if(x <= 0){
             x = prev_x;
             y = prev_y;
            continue;
        }
        if(y <= 0){
            x = prev_x;
            y = prev_y;
            continue;
        }
        if(x > 5){
            console.log("오른쪽 이동 불가");            
            x = prev_x;
            y = prev_y;
            continue;   
        }
        if(y > 5){
            console.log("아래쪽 이동 불가");            
            x = prev_x;
            y = prev_y;
            continue;   
        }
        
    }

console.log(x,y);