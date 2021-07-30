

//특정 연산의 결과를 저장하고 싶다.

//1. 변수를 선언(만든다)
var result;

//2. 변수를 초기화(값을 저장)
result = 10 + 20; // = assignment(대입) 우항에 있는 값을 좌항에 저장하라는 뜻


console.log(result * 3);

var haha;
console.log(haha);


//변수 선언과 함께 초기화 가능
var total = result + 3;
console.log(total);

// 변수의 재할당
total = result * 3;
console.log(total);

//변수의 값 복사
var copyTotal = total;

total = total + 10;

console.log(total);
console.log(copyTotal);