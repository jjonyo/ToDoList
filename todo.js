const toDoform = document.querySelector(".js-toDoForm"),
    toDoinput=toDoform.querySelector("input"),
    toDoList=document.querySelector(".js-toDoList");

const TODOS_LS="toDos";

let toDos=[];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleantoDoList=toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos=cleantoDoList;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}

function loadToDos(){
    const loadedtoDos=localStorage.getItem(TODOS_LS);
    if (toDos!==null){
        const parsedToDos=JSON.parse(loadedtoDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function paintToDo(text){
    const li=document.createElement("li");
    const delBtn=document.createElement("button");
    const newId=toDos.length+1;
    delBtn.innerText="❌";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    span.innerText=text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id=newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue=toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value="";
}

function init(){
    loadToDos();
    toDoform.addEventListener("submit",handleSubmit);
}

init();