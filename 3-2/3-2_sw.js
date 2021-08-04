//큰 수의 법칙
let sum = 0;  //합계
const M = 8;  // 더할때 숫자 갯수
const K = 3;  // 연속할 수 있는 최고의 수 갯수

const arr = [2,4,5,4,6]; 

arr.sort(); // 낮은수부터 정렬 [2,4,4,5,6]
const arr_top = arr[arr.length-1]; //배열중 가장 큰 값
const arr_top2 = arr[arr.length-2]; //배열중 가장 큰 값

    for(let i = 0; i < M; i++){
        if(i % (K+1) != 0){
            sum += arr_top;
        }
        else{
            sum += arr_top2;
        }
    }
    console.log(sum);



