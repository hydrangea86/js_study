
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

