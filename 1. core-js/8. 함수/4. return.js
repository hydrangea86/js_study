
function bar() {
    var temp = `ddd`;
    return temp;
}

// 함수 안에 있는 변수는 밖에서 못씀 쓰기위해선 return을 해야함.
var t = bar();
console.log(t);

console.log(`=============================`);


// 함수의 탈출문은 return
function add(n1, n2) {
    return n1 + n2;
    console.log(`안녕~`);
}

function multi(n1, n2) {
    console.log(`${n1} x ${n2} = ${n1 * n2}`);
}

// for(;;) == while (true) -> 무한루프
for(;;) {
    break;
}

function foo() {
    var n = 0;
    while (true) {
        n++;
        if (n === 5) return; // break는 while문에서 끝나는 거지만 return은 함수가 끝남
    }
    console.log(`안녕~~`);
}


// return이 없는 함수
function sing() {
    var lyrics = `
    Baby
    네게 반해 버린 내게 왜 이래
    두렵다고 물러서지 말고
    그냥 내게 맡겨봐라 어때
    My lady
     
    Ring ding dong
    Ring ding dong
    Ring diggy ding diggy
    Ding ding ding
    `;
    console.log(lyrics);
}

/*
for (var i = 0; i < 10; i++){
    sing();
}
*/

var result = add(10, 20);
var triple = result * 3;
console.log(triple);
console.log(`====================================`);

// return값이 없는 함수는 아무 것도 반환하지 않는다.
// 따라서 변수에 저장할 수 없고, 다른 함수의 인수로 사용할 수 없음
var result2 = multi(5, 7)
console.log(result2);
multi(10, 2);

console.log(`===========================================================`);

// 함수의 리턴 값은 언제나 한개!
// 그런데 2개의 정수를 전달 받아서
// 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴 받고 싶다.


////객체를 이용했을 때 //////////////
function operateAll(n1, n2) {
    var results= {
        plus: n1 + n2,
        minus: n1 - n2,
        multi: n1 * n2,
        divide: n1 / n2,
    };
    return results;
}

var operData = operateAll(10, 5);
console.log(`덧셈: ${operData.plus}`);
console.log(`곱셈: ${operData.multi}`);


////////배열을 이용했을 때////////////
console.log(`=====================================================`);

function operateAll1(n1, n2) {
    var results = [n1 + n2, n1 - n2, n1 * n2, n1 / n2];
    return results;
}

var operData = operateAll1(10, 5);
console.log(`덧셈: ${operData[0]}`);
console.log(`곱셈: ${operData[2]}`);

