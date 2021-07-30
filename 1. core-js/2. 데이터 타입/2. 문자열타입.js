
var greeting;
greeting = 'hello';
greeting = "안녕ㅎㅎ";
greeting =`잘가`;

console.log(typeof greeting);

var str = '그는 나에게 "안녕"이라고 말했다.';
console.log(str);

str = "Let's Go!";
console.log(str);

str = "그는 나에게 \"안녕\"이라고 말했다.";
console.log(str);

//탈출 문자 ( \t =탭  \n =new line)
str = '나는 \t\t 홍길동 \n 입니다.';
console.log(str);

// 역슬러시를 특수문자를 쓸 때는 한번 더 역슬러시 추가
var filepath = 'D:\\temp\\new_icon.png';
console.log(filepath);

//템플릿 리터럴 (ES6: 2015) ``
var lyrics = '링딩동 링딩동 링디기딩기디링딩동~~~~~\n링딩동 링딩동 링디기딩기디링딩동~~~~~\n링딩동 링딩동 링디기딩기디링딩동~~~~~\n링딩동 링딩동 링디기딩기디링딩동~~~~~';
console.log(lyrics);

lyrics = `링딩동 링딩동 링디기딩기디링딩동~~~~~
링딩동 링딩동 링디기딩기디링딩동~~~~~
링딩동 링딩동 링디기딩기디링딩동~~~~~
링딩동 링딩동 링디기딩기디링딩동~~~~~`;
console.log(lyrics);

var month = 8;
var day = 15;
var anni = '광복절'

console.log(month + '월 ' + day + '일은 ' + anni + '입니다.');
console.log(`${month}월 ${day}일은 ${anni}입니다.`);