var weekDays = [`월`, `화`, `수`, `목`, `금`, `토`, `일`];

// 배열 전체 순회 반복문 for ~ of
for (var day of weekDays) {
    console.log(day + `요일`);
}

console.log(`==================================`);



for (var i = 0; i < weekDays.length; i++) {
    if (i % 2 === 0) {
        console.log(weekDays[i] + `요일`);
    }
}

console.log(`=============================`);

var foods = ["짜장면", "짬뽕", "볶음밥"];
var i = 0;
//완성된 연결 문자열을 저장할 변수
var result = '';
for (var f of foods) {
    if (i === foods.length - 1) {
        result += f;
        break;
    }
    result += f + `과`;
    i++;
}
console.log(result);