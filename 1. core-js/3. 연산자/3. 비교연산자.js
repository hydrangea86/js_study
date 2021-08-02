
var a = 5;
var b = '5';

// 연산자는 암묵적으로 문자열 내부에 숫자가 있으면
// 자동으로 숫자로 변환한 후 값을 비교한다.
console.log(a == b);
console.log(a === b);

console.log('============================================');

// == 비교는 결과 예측이 힘드므로 사용하지 않는 걸 추천
console.log('0' == '');
console.log(0 == '');
console.log('0' == 0);
console.log(false == 'false');
console.log(false == '0');

console.log('=====================================');

// 일치 비교시 NaN을 주의, NaN은 자기 자신과 일치하지
// 않는 유일한 값입니다.
console.log(NaN === NaN); //(x)
console.log(isNaN(NaN, NaN));

//숫자 대소 비교
console.log('=================================');
var x = 10;
console.log(x > 5);
console.log(x <= 10);

//문자 대소 비교
console.log('=================================');

//유니코드 문자체계 대문자 A:65 부터 시작 /소문자 a:97 부터 시작/ 한글 가:44032 부터 시작 
console.log('apple' === 'APPLE');

console.log('ace' < 'ade');
console.log('new york' < 'zebra');
console.log('Zebra' < 'ace');

console.log('복숭아' < '감자');

//같은 문자형태일 경우 사전에서 뒤에 나올수록 크다
//영어 대문자 < 소문자 < 한국어
