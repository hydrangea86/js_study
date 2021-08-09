
// OR 연산자
console.log(`hello` || `world`);
console.log(0 || `안녕`);
// 좌항에서 참이면 좌항에서 결정, 결정 안나면 우항 참이면 우항으로 결정

// AND 연산자
console.log(`Hello` && `World`);
console.log(`` && `메롱`);

console.log(`======================`);

var x = 10;

// if (x > 0) console.log(`xsms 0보다 크다`);

x > 0 && console.log(`x는 0보다 크다`);

var baseLanguage = undefined;
baseLanguage = baseLanguage || `korean`;
console.log(baseLanguage);
