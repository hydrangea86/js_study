function showNumbers(n) {
    for (var i = l; i <= n; i++) {
        if (true) {
            console.log(i);
        }
    }
}

function showEvenNumbers(n) {
    for (var i = l; i <= n; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

function showOddNumbers(n) {
    for (var i = l; i <= n; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}

// 콜백 함수
console.log(`==============================================================`);

function showNumbers(n, code) {
    for (var i = 1; i <= n; i++) {
        if (code(i)) {
            console.log(i);
        }
    }
}
console.log(`====================================`);
showNumbers(30, n => n % 9 === 0);

/*
    - 콜백함수는 함수 호출자(사용자)가 기본기능은
      만든사람에게 맡기고 추가 기능을 스스로 생성해서 
      사용하고 싶을 때 쓰는 기법
*/

function sayHello(callback) {
    console.log('안녕하세요~~~!');
    callback('맛없는');
}

sayHello((msg) => console.log(msg + ' 바나나쥬스 주세요1~'));

console.log(`=================================================`);

/*
    숫자배열을 전달하면 해당 배열을 조건부로 필터링해서 
    복사 배열을 리턴하는 함수
    ex) [1,2,3,....,100] 배열을 함수에 전달 -> 짝수조건을 
    걸면 [2,4,6,8,10,...98,100]이 리턴
*/

function filter(array, condition) {
    //필터링이 끝난 배열
    var filteredAarray = [];
    for (var n of array) {
        if (condition(n)) {
            filteredAarray.push(n);
        }
    }
    return filteredAarray;
}

var arr = [1,2,3,4,5,6,7,8,9,10];
var newArr = filter(arr, n => n % 4 === 0);
console.log(newArr);