

var foods = [`김말이`, `닭꼬치`, `어묵`, `떡볶이`];

// indexOf() : 배열 요소의 인덱스를 알려줌. (요소에 없을시 -1 반환)
var idx = foods.indexOf(`오뎅`);
console.log(`찾은 인덱스: ${idx}`);

// slice() : 배열을 잘라낸 사본을 리턴
console.log(`=========================================`);

var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var sliceArr = arr.slice(4, 9);
console.log(sliceArr);
console.log(arr);

console.log(foods.slice(1, 3));

// slice에 괄호를 비우면 전체 복사
console.log(`===========================================`);
console.log(arr.slice());
var copyArr = arr.slice();
copyArr[0] = 99;
console.log(copyArr);
console.log(arr);

// slice에 괄호안에 값을 하나만 쓰면 그 인덱스부터 끝까지 잘라냄
console.log(arr.slice(7));

// reverse() : 배열을 역순으로 재배치, 원본을 변화시킨
console.log(`========================================`);
arr.reverse();
console.log(arr);

//  join() : 배열의 요소를 모두 꺼내어 구분문자열과 함꼐 연결시킴
console.log(`=======================================`);
var str = foods.join(`랑 `)
console.log(str);

// concat() : 배열을 결합
console.log(`=======================================`);
var arr1 = [10, 20, 30];
var arr2 = [500, 300, 100];
var arr3 = [700, 600];

var concatArr = arr1.concat(arr2, arr3);
console.log(concatArr);
console.log(arr1);
console.log(arr2);
console.log(arr3);

//includes() : 배열의 특성 요소가 있는지 확인
console.log(`=======================================`);
var result = foods.includes(`김말이`)
console.log(result);