

function foo() {
    var y = 3;
    return y;
}
// 함수는 콜하고 리턴하면 함수 내부 선언문 y의 메모리는 삭제됌
var y = foo();
console.log(y);

// 함수 밖에서 선언된 변수는 전역 변수(* 전역변수는 최소화 하는 게 효율적)
var z = `global z`;

function bar() {
    // 함수 내부에서 선언된 모든 변수는 지역 변수
    // 지역 변수는 함수호출이 종료되면 메모리에서 자동 삭제
    var z = `local z`;
    // 지역변수와 동일한 이름의 전역변수 존재시
    // 지역변수를 우선 참조함
    console.log(`함수 내부z: ${z}`);
}
bar();

console.log(`z: ${z}`);