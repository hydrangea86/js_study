
var t = true, f = false;

// &&: AND 연산
console.log(t && t);
console.log(t && f);
console.log(f && t);
console.log(f && f);

console.log(`===================================`);

// || : OR 연산
console.log(t || t);
console.log(t || f);
console.log(f || t);
console.log(f || f);

console.log(`====================================`);

// ! : NOT 연산 (논리반전)
console.log(!t);
console.log(!f);

// hasMoney() : 돈이 있으면 true, 없으면 false
// if(!hasMoney())

var money = 10000;
if(!money) {
    console.log(`그지니깐 집에가자`);
} else {
    console.log(`쇼핑을 하자!`);
}