/*
    # scores라는 이름을 가진 배열 변수가 있습니다.
      여기에는 학생들의 수학점수가 8개 저장됩니다.
      점수는 임의로 설정하세요.
    - 요구사항:
    1. 배열에 저장된 학생들의 수학점수의 총점과 평균을 구해서
       콘솔에 출력하세요.
    2. 학생들의 점수가 추가되었을 때 코드를 건드리지 않아도 자동으로
       총점, 평균이 갱신되어야 합니다.
*/

var scores = [98, 32, 66, 87, 49, 12, 100, 99, 100];
var total = 0;

for (var i =0; i < scores.length; i++) {
    total += scores[i]
}
var avg = total / scores.length
var prettierAvg = Math.round(avg * 10 ** 2) / 10 ** 2;
console.log(`총 합계: ${total}`);
console.log(`평균: ${prettierAvg}`);


