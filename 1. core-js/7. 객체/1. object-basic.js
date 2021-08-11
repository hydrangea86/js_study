
// 객체 생성
var dog = {
    //property(객체의 속성) 설정
    name: `뽀삐`,
    kind: `진돗개`,
    age: 2,
    favorite: [`산책`, `개껌`],
    injection: true
};

var cat = {
    kind: `블랙러시안`,
    age: 3,
    name: `콩순이`,
    injection: false,
    favorite: [`낮잠`, `캣타워`]
};

console.log(typeof cat);

// 객체에 저장된 값을 참조
console.log(cat.name);
console.log(dog.age++);
console.log(cat.favorite[0]);
cat.favorite.push(`참치`);
console.log(cat);

// property 참조2
console.log(`=========================================`);
console.log(dog.injection);

// 대괄호 참조시에는 반드시 key를 문자열 형태로 넣어야 함
console.log(dog[`injection`]);

// property 값 수정
dog.age = 5;

dog.favorite[1] = `방 어지럽히기`;
console.log(dog);

// property 동적 추가
cat.master = `고길동`;
console.log(cat);


// property 동적 삭제
delete cat.master;
console.log(cat);