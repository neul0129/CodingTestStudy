let N = 17;
const K = 4;
let count=0;

while(N != 1){
    if(N % K == 0){
        N /= K ;
        count += 1;
    }
    else{
        N -= 1;
        count += 1;
    }    
}
console.log(count);
