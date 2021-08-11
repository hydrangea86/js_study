
// 식별자: 데이터를 구분하기 위한 고유의 이름 (변수, 함수..)
//  1. 대소문자를 구분할 것
// 텍스트 저장할때는 홑따옴표 감싸기
var banana = '바나나';
var BANANA = '빠나나';
var BaNaNa = '버네이너';
console.log(banana);
console.log(BANANA);

// 2. 숫자로 시작하거나 숫자만으로 만들지 말 것
// var 8 = 100; (x)
// var 7hello = 77; (x)
var hello7 = 77;
var he77llo = 777;

// 특수문자는 $, _ 외 사용금지
// var my-adder = '대전 서구'; (x)
// var hello!@ = '안녕'; (x)
var $bye = '잘가';
var my_friend = '둘리';
console.log($bye + ' ' + my_friend);
console.log(`${$bye} ${my_friend}`);

// 4. 띄어쓰기 불가능
// var user phone number = '01012344321' (x)
var userphonenumber = '01012344321';
console.log(userphonenumber);

// coding convention: 관례
var user_phone_number = 1; //snake case   (파이썬, SQL 채용)
var userPhoneNumber = 1;   //camel case   (자바스크립트, 자바 채용)
var UserPhoneNumber = 1;   //pascal case  (클래스같은 큰 이름)

// Hungarian case
var int_hello = 700;
var str_addr = '대전';

// 5. keyword(예약어)는 식별자로 사용하지 말 것!
// var var; (x)
// var for; (x)

// 식별자 이름은 구체적이고 명확하며 일관되게 지을 것!
