
// x ~ y 까지의 누적합을 구하는 함수 정의
// 함수를 정의할 때 외부에서 받아올 값을 저장하는 변수를
// 매개 변수(parameter)
function calcRangeTotal(begin=1, end=10) {
    console.log(`b: ${begin}, e: ${end}`); //${end}: undefined 논리 NaN 한바퀴도 안돔 그래서 총합 0
    var total =0;
    for (var n = begin; n <= end; n++) {
        total += n;
    }
    return total;
}

// 함수를 호출할 때 함수에 전달하는 값 3, 8을 인수(argument)
/*
var a = 3, b = 8;
var result1 = calcRangeTotal(a, b);
*/
var result1 = calcRangeTotal(3, 8);
console.log(result1);

var result2 = calcRangeTotal(10);
console.log(result2);

var result3 = calcRangeTotal();
console.log(result3);

console.log(`==========================================`);


// 매개 변수의 기본값
// ES6+
function sayHello(language=`한국어`) {

    //ES5
    // language = language || `한국어`;

    if (language === `한국어`) {
        console.log(`안녕하세요~`);
    } else if (language === `영어`) {
        console.log(`hello~~`);
    } else if (language === `중국어`) {
        console.log(`따쟈하오~`);
    }
}

sayHello();
sayHello(`영어`);


// 매개변수가 없는 함수

function selectRandomPet() {
    var pets = [`멍멍이`, `야옹이`, `짹짹이`, `어흥이`, `꾹꾹이`];
    // 랜덤 정수 배열 사이즈만큼 생성
    var rn = Math.floor(Math.random() * pets.length);
    return pets[rn]
}
console.log(selectRandomPet());