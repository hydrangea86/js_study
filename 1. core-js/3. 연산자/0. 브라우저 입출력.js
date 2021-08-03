
//아래의 두함 수는 nodejs 환경에서는 작동하지 않습니다.
// 오직 브라우저에서만 사용하는 함수입니다.

// prompt(): 브라우저에서 간단한 텍스트 입력을 처리해줌.
// alert(): 브라우저에서 간단한 텍스트 출력을 처리해줌.

// alert(`안녕안녕~~`);

// prompt앞에 +기호를 붙이면 숫자로 가져옵니다. (+가 없을 경우 문자(string)로 인식.)
var num1 = +prompt('숫자를 하나 입력하세요!');
var num2 = +prompt('숫자를 하나 입력하세요!');

console.log(`num1: ${num1}`);
console.log(`num2: ${num2}`);

alert(`두 수의 합: ${num1 + num2}`)