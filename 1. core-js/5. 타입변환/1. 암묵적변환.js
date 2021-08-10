
var ex = 10 + '20';
console.log(ex);
// 숫자를 문자열로 바꾸는게 더 쉽기 안전하기 때문

var num = 200;
var numStr = 200 + ''; // '200'

var logic = true;
var logic = '' + true; //논리 타입에서 문자열로 타입 바뀜
console.log(typeof logic);


var ex2 = 100 - `30`;
console.log(ex2);

// 사칙연산중 +더하기만 문자열 가능 하기 때문에 나머지 사칙 연산은 문자타입 숫자는 숫자 타입으로 바뀜
// 논리 타입 true 0이외의 숫자는 모두 true 비트값 최소로 1로 선정함.