// 다중 if는 각각의 그룹의 성질을 가짐  
// 다중 if else 첫 if 시작점에서 내려오면 한 그룹 else는 써도 안써도 그만 옵션.

var age = 26;

if (age >= 20) {
    console.log('성인입니다.');
} else if (age >= 17) {
    console.log('고등학생입니다.');
} else if (age >= 14) {
    console.log('중학생입니다.');
} else if (age >= 8) {
    console.log('초등학생입니다.');
} else {
    console.log('미취학 아동입니다.');
}