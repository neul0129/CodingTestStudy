const student = [
    { name : "재석", age : 21},
    { name : "광희", age : 25},
    { name : "형돈", age : 13},
    { name : "명수", age : 44}
]

student.sort(function(a, b) { // 오름차순
    return a.age - b.age;
});

console.log(student);