
// 상수: 불변의 고정값
// 상수 식별자는 대문자로
const PI = 3.14159265;
// pi = 5.5;
console.log(`pi: ${PI}`);

const TAX_RATE = 0.1 // 세율
let preTaxprice = 100; // 세전가격
let postaxprice = preTaxprice + (preTaxprice * TAX_RATE); // 세후가격


// const와 객체 (배열, 객체, 함수)
const person = {
    name: `김철수`,
    age: 30
};

// 객체안의 property는 변경 가능
person.name = '김바보';

/*
// 객체 통으로는 변경 안됌
person = {
    name: `박영희`,
    age: 25
};
*/
console.log(person);

// const는 항상 초기화 값이 필요
const a = `abc`;
console.log(a);


