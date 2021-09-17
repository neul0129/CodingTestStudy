// 정렬 - 두 배열의 원소 교체
const a = [1, 2, 5, 4, 3];
const b = [5, 5, 6, 6, 5];
K = 3;
let tmp = 0;

a.sort((a,b) => {    //오름차순
    return a - b;
});

b.sort((a,b) => {    //내림차순
    return b - a;
});

for (let i = 0; i < K; i++) {
    if (a[i] < b[i]){
        tmp = a[i];
        a[i] = b[i];
        b[i] = tmp;
    }
}

console.log(a);
