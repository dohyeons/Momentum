const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector('input')
const toDoList = document.querySelector("#todo-list");

const TODOS_KEYS = 'todos';

let toDos = [];


function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
    li.remove();
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}

function paintToDo(newTodo) {
    const li = document.createElement('li')
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button')
    button.innerText = 'X'
    button.addEventListener("click", deleteToDo);
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
    }




function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = '';
    const newTodoObj = {
        text: newToDo,
        id: Date.now()
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos()
}


toDoForm.addEventListener('submit', handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEYS);

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo)
}