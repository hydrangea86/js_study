

// 원의 넓이를 구해야 함: pi * r ** 2
// 반지름이 5인 원의 넓이
var pi = 3.14159265;

var circle1 = pi * 5 ** 2;
// 반지름 10
var circle2 = pi * 10 ** 2;
// 반지름 20
var circle3 = pi * 20 ** 2;

// 다른 코드 3만줄 //


///////////////// 원의 넓이를 구하는 함수 정의 ///////////////////////
// 함수는 정의만 하면 실행되지 않고, 반드시 호출해서 실행시킴.
function calcAreaCircle(r) {
    console.log(`원의 넓이를 구해볼까요~?`);
    var pi = 3.14159265;
    var area = pi * r ** 2;
    return area;
}

// 함수를 호출 (정의된 함수를 사용)
var area1 = calcAreaCircle(10);
console.log(`area1: ${area1}`);

var area2 = calcAreaCircle(20);
console.log(`area1: ${area2}`);

console.log(`=======================================================`);
calcAreaCircle(1)
calcAreaCircle(1)
calcAreaCircle(1)
calcAreaCircle(1)
calcAreaCircle(1)

//========================================================================================
console.log(`==============================================================================`);

// 1 ~ 10까지의 누적합
var total = 0;
for (var n = 1; n <= 10; n++) {
    total += n;
}

// 1 ~ 50까지의 누적합
var total = 0;
for (var n = 1; n <= 50; n++) {
    total += n;
}

// 1 ~ 100까지의 누적합
var total = 0;
for (var n = 1; n <= 100; n++) {
    total += n;
}

// 함수의 정의 : 1 ~ x까지의 누적합
function calculateTotal(x) {
    var total = 0;
    for (var n = 1; n <= x; n++) {
        total += n;
    }
    return total;
}

var result1 = calculateTotal(10);
console.log(result1);

var result2 = calculateTotal(100);
console.log(result2);


console.log(`===================================================`);

function add(n1, n2) {
    return n1 + n2;
}


console.log(add(10, 20));

// 함수 정의 2: 함수 리터럴 사용

var sub = function(n1, n2) {
    return n1 - n2;
};
console.log(sub(20, 10));

