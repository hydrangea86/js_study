
// 2개의 정수의 합을 구하는 함수
function add2(n1, n2) {
    return n1 + n2;
}

function add3(n1, n2, n3) {
    return n1 + n2 + n3;
}

console.log(`==============================================`);
// n개의 정수의 합 (배열을 이용함)
function addAll(nums) {
    var total = 0;
    for (var n of nums) {
        total += n;
    }
    return total;
}

var result1 = addAll([10, 20, 30, 40]);
console.log(`result1: ${result1}`);

console.log(`=================================================`);

// 스프레드 문법: 함수 내부에서 자동으로 배열 처리
function addAll1(...nums) {
    var total = 0;
    for (var n of nums) {
        total += n;
    }
    return total;
}

var result2 = addAll1(10, 20, 30, 40);
console.log(`result2: ${result2}`);

var arr = [1, 2, 3];
arr.splice(1, 1, `메롱`, `하이`);
console.log(arr);