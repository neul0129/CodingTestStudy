//시각 

let count = null;

for (let h = 0; h <= 5; h++) {  //시
    for (let m = 0; m < 60; m++) {  //분
        for (let s = 0; s < 60; s++) {  //초
            if((String(h)+String(m)+String(s)).includes(3)){  
                count++; 
            }
        }
    }
}
console.log(count);