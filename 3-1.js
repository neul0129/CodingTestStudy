//거스름돈 
n = 1260;
count = 0;

var coin_types = [500, 100, 50, 10]

for (coin of coin_types) {
    count += parseInt(n / coin);  //코인 갯수 구하기
    n %= coin;  // 나머지 값 반환
}
console.log(count);