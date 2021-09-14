//======================== 전역 변수 ===========================//

const todos = [{
        id: 1,
        text: "할 일 1",
        done: false
    },
    {
        id: 2,
        text: "할 일 2",
        done: false
    },
    {
        id: 3,
        text: "할 일 3",
        done: false
    }
];


//======================== 함수 정의 ===========================//

//추가될 새로운 할 일의 아이디를 생성하는 함수
function makeNewId() {
    if (todos.length <= 0) { //기존 할일 데이터가 하나도 없음
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

    const $toDOList = document.querySelector('.todo-list');
    $toDOList.appendChild($newLi);
}

//할 일 추가 기능 처리
function insertTodoData() {
    //1. 데이터 처리
    const $todoText = document.getElementById('todo-text')
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    todos.push(newToDo);
    console.log(todos);

    //2. 화면에 데이터 렌더링
    renderNewTodo(newToDo)

    //3. 입력 완료 후 input 텍스트 제거
    $todoText.value = '';
}

// 할 일 완료 변화 처리
function changeCheckState() {
    /*
        1. css변동: 체크가된 label 태그를 찾아 checked클래스 추가
        2. 이벤트
    */
}


//======================== 메인 실행 ===========================//
// (function() {}) ();
(function () {

    //할 일 추가 이벤트
    //form은 기본적으로 submit 기능이 내재되어있음
    const $addBtn = document.getElementById('add');
    $addBtn.addEventListener('click', e => {
        e.preventDefault(); //서버 전송기능 중단
        //console.log("애드버튼 클림됨!");

        insertTodoData();
    });
    // 할 일 완료(체크박스) 이벤트
    

})();