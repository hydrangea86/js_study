/*==============================================================================================================================================
        - Quiz. 
        Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
        반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.

        var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
        console.log(`총합: ${result.total}, 평균: ${result.avg}`);
*/

console.log(`====================================================================================================================================`);

function calcNumbersTotalAndAverage(...nums) {
    var scoreInfo = {
        total: 0,
        avg: 0
    };
    for (var eachScore of nums) {
        scoreInfo.total += eachScore;
    }
    scoreInfo.avg = scoreInfo.total / nums.length;
    return scoreInfo; // return {}
}

var result = calcNumbersTotalAndAverage(90, 80, 100, 90);
console.log(`총합: ${result.total}, 평균: ${result.avg}`);




/*==============================================================================================================================================
        - Quiz. 
        n의 약수의 개수를 구하기
        1. 정수 n을 전달받아 n의 약수들을 출력하고 
        약수의 개수를 리턴하는 함수 calcDivisor를 정의하세요.
        2. 약수의 출력은 함수 내부에서 이뤄져야 합니다.
        3. 힌트) 전달받은 n을 1부터 n까지 지속적으로 나누어
        나누어 떨어졌을 시 약수의 개수 카운트를 1증가시키고 출력.

        var divCount = calcDivisor(15);
        console.log(`약수의 개수: ${divCount}개`);
*/

console.log(`====================================================================================================================================`);

function calcDivisor(n) {
    var count = 0;
    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            console.log(i);
            count++;
        }
    }
    return count;
}
var num = 15;
var divCount = calcDivisor(num);
console.log(`약수의 개수: ${divCount}개`);


/*==============================================================================================================================================
        - Quiz. 
        1. 키(cm)와 몸무게(kg)을 인수로 전달받아 
        2. bmi지수를 계산하여 반환함과 동시에 
        3. bmi가 25.0이상이면 "당신은 과체중입니다." 
        18.5이하면 "당신은 저체중입니다." 
        나머지는 "당신은 정상체중입니다."를 출력하는 
        CalcBMI라는 함수를 정의하고 호출하세요. 
        # bmi 계산식 : 몸무게(kg) / (키(m) * 키(m)) 
        # 출력 예시: 
        "키 -> 178.4cm, 체중-> 78.2kg의 체질량지수는: 24.57입니다"

        var h = 178.4, w = 78.2;
        var myBmi = calcBMI(h, w);
        console.log(`키 -> ${h}cm, 체중 -> ${w}kg의 체질량지수는 ${myBmi}입니다.`);
*/

console.log(`====================================================================================================================================`);

function calcBMI(h, w) {
    var BMI = w / ((h / 100) ** 2);
    if (BMI >= 25) {
        console.log(`당신은 과체중입니다.`);
    } else if (BMI <= 18.5) {
        console.log(`당신은 저체중입니다.`);
    } else {
        console.log(`당신은 정상체중입니다.`);
    }
    return round(BMI, 2);
    /*
    var prettier = round(BMI, 2);
    return prettier;
    */
}

// 원하는 자릿수만큼 반올림 해주는 함수
function round(number, pos) {
    return BMI = Math.round(number * 10 ** pos) / 10 ** pos;
}
var h = 178.4, w = 78.2;
var myBMI = calcBMI(h, w);
console.log(`키: ${h}cm, 몸무게: ${w}kg의 체질량지수는 ${myBMI}입니다.`);


console.log(`====================================================================================`);

function r1( ){
    console.log(`r1 호출`);
    return 4;
}
function r10( ){
    console.log(`r10 호출`);
    return (30+r1( ));
}
function r100( ){
    console.log(`r100 호출`);
    return (200+r10( ));
}

console.log(r100())
