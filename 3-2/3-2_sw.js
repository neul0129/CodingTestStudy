//큰 수의 법칙

const count = 0;
const sum = 0;
const N = 5;
const M = 8;
const K = 3;

const arr = [2,4,5,4,6];

arr.sort(); // [2,4,4,5,6]
const arr_top = arr[arr.length-1]; //배열중 가장 큰 값
const arr_top2 = arr[arr.length-2]; //배열중 가장 큰 값

    // for(arr.length; arr<M; arr.length++){ 
    //     count++;
    //     if(count % K != 0){
    //         sum += arr_top;
    //     }
    //     else{
    //         sum += arr_top2;
    //     }
    // }

    for(int i = 1; i < M; i++){
        
        if(i % K != 0){
            sum += arr_top;
        }
        else{
            sum += arr_top2;
        }
    }
    console.log(sum);



