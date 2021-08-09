

// 명시적 문자열 변환
var a = 10, b = 20;
// var result = String(a) + String(b);
// var result = a.toString() + b.toString();

var result = `` + a + b;
console.log(`result: ${result}`);

//명시적 숫자 변환 // parseInt(정수), parseFloat(실수)
console.log(`===============================`);

var m = `100`, n = `5.11`;
// var result2 = Number(m) + Number(n);
// var result2 = parseInt(m) + parseFloat(n);
var result2 = (+m) + (+n);
console.log(`result2: ${result2}`);


// 명시적 논리 변환 (Boolean / !!)
console.log(`==============================`);

var ex1 = Boolean(undefined);
console.log(ex1);

// ! : 논리 부정(not) 연산자
var ex2 = !!`메롱`;
console.log(ex2);

