

// 1 ~ 10 까지의 랜덤 정수를 반복 출력할 건데
// 만약 숫자 6이 나오면 그만 출력할 거야..
var count = 0;

while (true) {
    var rn = Math.floor(Math.random() * 10) + 1;
    console.log(rn);
    count++
    if (rn === 6) {
        break;
    }
}
console.log(`총 횟수: ${count}`);