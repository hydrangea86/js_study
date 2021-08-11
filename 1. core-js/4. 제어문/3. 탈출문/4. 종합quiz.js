

//정답횟수와 오답횟수를 누적할 변수 선언
var correctCount = 0, wrongCount = 0;

while (true) {

    // 1 ~ 50사이의 랜덤 정수 2개
    var first = Math.floor(Math.random() * 50) + 1;
    var second = Math.floor(Math.random() * 50) + 1;

    //랜덤 연산자 생성을 위한 3가지 랜덤 정수
    var operatorNum = Math.floor(Math.random() * 3);

    //연산자 기호를 저장할 변수
    var mark;
    //실제 정답
    var realAnswer;

    if (operatorNum === 0) {
        mark = '+';
        realAnswer = first + second;
    } else if (operatorNum === 1) {
        if (first === second) {
            first++;
        }
        mark = '-';
        realAnswer = first - second;
    } else {
        mark = 'x';
        realAnswer = first * second;
    }


    //사용자의 입력값
    var userAnswer = +prompt(`${first} ${mark} ${second} = ??`);

    //종료 조건
    if (userAnswer === 0) break;    

    //정답 검증
    if (realAnswer === userAnswer) {
        alert('정답입니다~~');
        correctCount++;
    } else {
        alert('틀렸습니다~~');
        wrongCount++;
    }

} //end while 

alert(`정답 횟수: ${correctCount}회, 틀린 횟수: ${wrongCount}회`);