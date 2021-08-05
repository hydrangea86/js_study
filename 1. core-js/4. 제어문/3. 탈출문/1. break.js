for (var i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
console.log(`반복문 종료!`);

// break 구문 헷갈리면 중괄호{} 사용 

console.log(`===========================================`);

for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 2; j++) {
        if (i === j) break;
        console.log(`${i}, ${j}`);
    } //end inner for
} //end outer for