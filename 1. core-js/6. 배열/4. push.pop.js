

var pets = [`멍멍이`, `야옹이`, `짹짹이`];
console.log(pets);

// push() : 배열의 맨 끝에 요소를 추가
pets.push(`어흥이`);
pets.push(`징징이`);
console.log(pets);

// pop() :  배열의 맨 끝 요소를 제거
var lastItem = pets.pop();
console.log(pets);
console.log(`last: ${lastItem}`);

// shift() : 배열의 맨 첫번째 요소를 제거
var first = pets.shift();
console.log(pets);
console.log(`first: ${first}`);

// unshift() : 배열의 맨 첫번째 위치에 요소를 추가
pets.unshift(`갈갈이`);
console.log(pets);