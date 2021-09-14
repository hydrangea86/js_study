//================== 전역 변수 ==================//

const todos = [{
    id: 1,
    text: '할 일 1',
    done: false
},
{
    id: 2,
    text: '할 일 2',
    done: false
},
{
    id: 3,
    text: '할 일 3',
    done: false
}
];



//================== 함수 정의 ==================//

//추가될 새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
if (todos.length <= 0) { //기존 할일데이터가 하나도 없음
    return 1;
} else {
    //맨 마지막 할일의 id + 1을 리턴
    return todos[todos.length - 1].id + 1;
}
}

//새로운 할 일을 화면에 렌더링하는 함수
function renderNewTodo(newToDo) {


const $newLi = document.createElement('li');
$newLi.classList.add('todo-list-item');
$newLi.dataset.id = newToDo.id;

$newLi.innerHTML = `
    <label class="checkbox">
        <input type="checkbox">
        <span class="text">${newToDo.text}</span>
    </label>
    <div class="modify">
        <span class="lnr lnr-undo"></span>
    </div>
    <div class="remove">
        <span class="lnr lnr-cross-circle"></span>
    </div>
`;

const $toDoList = document.querySelector('.todo-list');
$toDoList.appendChild($newLi);
}


//할 일 추가 기능 처리
function insertTodoData() {

//1. 데이터 처리
const $todoText = document.getElementById('todo-text');
const newToDo = {
    id: makeNewId(),
    text: $todoText.value,
    done: false
};
//console.log(newToDo);

todos.push(newToDo);
//console.log(todos);

//2. 화면에 데이터 렌더링
renderNewTodo(newToDo);

//3. 입력 완료 후 input 텍스트 제거
$todoText.value = '';
}

//data-id값으로 배열을 탐색하여 인덱스를 리턴
function findIndexById(dataId) {
for (let i=0; i < todos.length; i++) {
    if (todos[i].id === dataId) {
        return i;
    }
}
return null; //못찾았을 때 null리턴
}


//할 일 완료 변화 처리
function changeCheckState($label) {
/*
    1. css변동: 체크가된 label태그를 찾아 checked클래스 추가
    2. 이벤트가 발생한 그 label을 찾아서 처리하려면 
       이벤트 타겟정보가 필요함.
    3. 이벤트 타겟정보는 이 함수를 호출한 핸들러가 알고 있음.
*/
$label.classList.toggle('checked');

/*
    4. 문제상황: css만 변했지 실제 데이터(done)는 변동이 없다.
    5. todos배열의 해당 객체에 접근해서 done값을 변동시켜야 함.
    6. 만약에 2번째 체크박스를 눌렀으면 todos배열의 1번 인덱스에 접근하여 해당 done의 값을 반대로 수정해야 함.

    7. 인덱스에 접근하려면 인덱스를 알아내야 하고 그러려면
      id정보가 필요하다.
*/
const dataId = +$label.parentNode.dataset.id;
//console.log(dataId);

//8. id값을 기반으로 배열을 탐색하여 data-id와 일치하는 
//   id프로퍼티를 가진 객체가 몇번째에 있었는지를 체크
const idx = findIndexById(dataId);
//console.log(`idx: ${idx}`);

//9. 찾은 인덱스로 배열에 해당객체에 접근하여 done을 수정
if (idx !== null) {
    todos[idx].done = !todos[idx].done;
}
//console.log(todos);
}


//================== 메인 실행 ==================//
(function () {

//할 일 추가 이벤트
const $addBtn = document.getElementById('add');
$addBtn.addEventListener('click', e => {
    e.preventDefault(); //서버 전송기능 중단

    insertTodoData();
});

//할 일 완료(체크박스) 이벤트
const $toDoList = document.querySelector('.todo-list');
$toDoList.addEventListener('change', e => {

    if (!e.target.matches('.checkbox input[type=checkbox]')) return;

    // console.log(e.target.parentNode);
    changeCheckState(e.target.parentNode);
});

})();