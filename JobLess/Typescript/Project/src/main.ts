import './style.css'

interface Todo {
    readonly id: number;
    title: string;
    isCompleted: boolean;
}

// Create an array to store the tasks
const todos: Todo[] = [];

const todosContainer = document.querySelector(".todosContainer") as HTMLDivElement;
const todosInput = document.getElementById("input") as HTMLInputElement;
const myform = document.getElementById("myform") as HTMLFormElement;

myform.onsubmit = (e: SubmitEvent) => {
    e.preventDefault();
    const todo: Todo = {
        id: Number(Math.random() * 100),
        title: todosInput.value,
        isCompleted: false
    }
    todos.push(todo);
    todosInput.value = "";
    console.log(todos);
    ShowTodos(todos);
}


function generateTodoItem(title: string, isCompleted: boolean, id: number) {
    const todo: HTMLDivElement = document.createElement("div");
    todo.className = "todo";
    const checkBox: HTMLInputElement = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "isCompleted";
    checkBox.checked = isCompleted;
    checkBox.onchange = () => {
        todos.find(item => {
            if(item.id === id ){
                item.isCompleted = checkBox.checked ;
            }
        })
        paragraph.className = checkBox.checked ? "text-cut" : ""
    }
    const paragraph: HTMLParagraphElement = document.createElement("p");
    paragraph.innerText = title;
    paragraph.className = isCompleted ? "text-cut" : ""
    const btn: HTMLButtonElement = document.createElement("button");
    btn.innerHTML = "Remove";
    btn.className = "deleteBtn";
    btn.onclick = () => {
        deleteToDo(id);
    };

    // Appending All To TodoItems
    todo.append(checkBox, paragraph, btn);
    todosContainer.append(todo);
}

function ShowTodos(myTodos: Todo[]) {
    todosContainer.innerText = "";
    myTodos.forEach(item => {
        generateTodoItem(item.title, item.isCompleted, item.id);
    })
}

function deleteToDo(id: number) {
    const index = todos.findIndex(item => item.id === id);
    console.log(index);
    todos.splice(index, 1);
    ShowTodos(todos);
}