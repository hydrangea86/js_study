

// 함수 정의부
function aaa() {
    console.log(a);
}

function bbb() {
    console.log(a);
}

function ccc() {
    console.log(a);
}

function ddd() {
    console.log(a);
}

/////////////////////////////////////////////////////////////////////

// 코드 실행부
// 즉시실행 함수
(function () {
    console.log(`야호`);
    var a = 10;
})();

console.log(`===================================================`);

//재규함수 
function countdown(n) {
    /*
    if (n < 0) return;
    console.log(n);
    countdown(n-1);
    */

    for (var i = n; i >= 0; i--) {
        console.log(i);
    }
}

countdown(5);

function compute(num) {
    if (num <= 1) return num;
    return compute(num - 1) + compute(num - 3);
}

console.log(compute(4));

console.log(`==============================================================`);

// 중첩함수

function outer() {
    console.log(`outer call`);
    var x = 1;

    //innersms outer 전용함수다. 따라서 outer영역 내부에서만 호출가능함.
    function inner() {
        console.log(`inner call!`);
    }

    inner();
}

outer();

// 함수 리터럴(값) = 익명함수, 화살표 함수(ES6+)
function add(n1, n2) {
    return n1 + n2;
}

var add = function (n1, n2) {
    return n1 + n2;
};


// 화살표 함수는 함수의 내용이 단 한문장이라면
// 블록을 생략 가능, 그 한문장이 return문이라면 return도 생략가능
/*
var add = (n1, n2) => {
    return n1 + n2;
};
*/

var add = (n1, n2) => n1 + n2;
var result = add(10, 20);
console.log(`result: ${result}`);

console.log(`==============================`);

var sayHello = () => console.log(`안녕하세요~`);

sayHello();

console.log(`=============================`);


// 정수 n을 전달하면 해당 정수가 짝수인지 판별

var isEvenNumber = (n) => n % 2 === 0;

console.log(isEvenNumber(5));

// 정수 n을 전달하면 n의 제곱값이 리턴되는 화살표 함수

var doubleMultiply = (n) => n ** 2;

console.log(doubleMultiply(4));