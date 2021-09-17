// 정렬 - 성적이 낮은 순서로 학생 출력하기
const student = [
    { name : '홍길동', score: 95},
    { name : '이순신', score: 77}
];

student.sort(function(a, b) { // 오름차순
    return a.score - b.score;
});

console.log(student);

