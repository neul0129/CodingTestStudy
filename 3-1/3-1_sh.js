n = 1260
count = 0

var coin_types = [500, 100, 50, 10]

for (var coin of coin_types) {
	count += parseInt(n / coin) 
	n %= coin
}

console.log(count)
