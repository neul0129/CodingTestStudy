// const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
// const key = [];
// let count = 0;

// let array_function = () => {
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < array.length; j++) {
//             if (i == array[j]){
//                 count++;
//             }
//         }
//         console.log(i, count);
//         count = 0;
//     }
// }
// array_function();


const array = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];
const key = [];  // 값을 차례로 넣어줄 배열 생성

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i == array[j]){   // i가 증가할때마다 array값 하나씩 비교해보며 같을때
                key.push(i);  //key배열에 i 삽입
            }
        }
    }
    console.log(key);








