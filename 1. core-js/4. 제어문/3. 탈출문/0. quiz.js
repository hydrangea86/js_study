// 첫번째
/*
var i = 3;

while (i) {
    alert (i--);
}
*/

//두번째
/*
var i = 0;
while (++i < 5) {
    alert (i);
}
*/
// -> 출력 값 1, 2, 3, 4 (전위형 특성: 초기 설정된 변수값0을 1씩 증가한 후 출력발생)

/*
var x = 2;
var y = 2++ * 3;
console.log(y);
console.log(x);
*/


// 3번째
/*
var i = 0;
while (i++ < 5) {
    alert(i);
}
//  ->출력 값 1, 2, 3, 4, 5 (후위형 특성: 초기 설정된 변수값 0부터 시작한 후 1씩 증가한 후 출력 발생)
*/



// 5번째
/*
var n = +prompt(`숫자를 입력하시오!`);
if (n > 100) {
  break;
}
*/


//  100보다 큰 수를 입력할 때까지 입력창 띄우기

while (true) {
    var num = +prompt(`100보다 큰 수를 입력해라~`);
    if (num > 100) {
        alert(`참 잘했어요`);
        break;
    }
}