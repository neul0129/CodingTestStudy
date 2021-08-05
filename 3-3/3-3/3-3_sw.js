//숫자 카드 게임
const card = [[3,1,2],[4,1,4],[2,2,2]];  //2차원 배열 


for (let i = 0; i < card.length; i++) {
    card[i].sort();  // [1,2,3],[1,4,4],[2,2,2]
}

if(card[0][0]>card[1][0]){
    console.log("첫번째 행 win");
}
else if(card[1][0]>card[2][0]){
    console.log("두번째 행 win");
}
else{
    console.log("세번째 행 win");
}


