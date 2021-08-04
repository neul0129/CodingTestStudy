const n = 5
const m = 7
const k = 3
const arr = [2,4,5,4,6]
let sum, p, r = 0

arr.sort()
p = parseInt(m / (k + 1))   // 몫
r = m % (k + 1)             // 나머지

sum = (arr[arr.length-1] * k + arr[arr.length-2]) * p + r * arr[arr.length-1]

console.log(sum)
