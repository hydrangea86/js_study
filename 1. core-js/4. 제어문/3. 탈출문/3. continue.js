
for( var i = 0; i < 10; i++) {
    if(i % 2 === 0) continue; // continue의 의미는 skip가 유사
    console.log(i);
}

while(true) {
    var n = +prompt(`숫자를 입력하세요.`);
    if (n === 0) {
        break;
    } else if (n === 1){
        continue;
    }
    alert(`메롱메롱~~~~`);
}
alert(`끝났지롱~~~`)