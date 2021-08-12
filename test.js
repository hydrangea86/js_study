/*
const a = 10 , b=20;
console.log(`a + b =${a + b}`);
*/



// 구구단 2~9까지 
var level = 2;
var line = 1;
while (level < 10) {
    while (line < 10) {
        console.log(`${level} x ${line} = ${level * line}`);
        line++;
    }
    level++;
}

//=======================================================

for (var level = 2; level < 10; level++) {
    for (var line = 1; line < 10; line++) {
        console.log(`${level} x ${line} = ${level * line}`);
    }
}