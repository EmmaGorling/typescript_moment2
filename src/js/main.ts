import { TodoList } from "./toDo";

const todoList = new TodoList();       // Skapa instans av TodoList-klassen

// När sidan laddats klart
document.addEventListener('DOMContentLoaded',  () => {
    // Hämta formulär med eventlistener
    const form = document.getElementById('form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault(); // Hindrar att formuläret skickas traditionellt
        addNewTodo();
    });

    todoList.loadFromLocalStorage();
    renderTodos();
});

function addNewTodo():void {

    // Inputs
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;
    // Input-värden
    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);

    // Kollar inmatning
    if (todoList.addTodo(task, priority)) {
        renderTodos();
        taskInput.value = '';
        priorityInput.value = '';
    } else {
        alert('Please enter valid task & priority (1-3)');
    }

}

// Skriva ut Todos
function renderTodos(): void {
    // Hämta ul
    const todoUl = document.getElementById('todoList') as HTMLUListElement;
    todoUl.innerHTML = '';
    // Sortera aray efter prio
    const sortedTodos = todoList.getTodos().slice().sort((a, b) => (a.priority - b.priority));
    // Skapa element för varje todo
    sortedTodos.forEach((todo, index) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
           <p>${todo.task}</p>`;
        todoUl.appendChild(newLi);
        newLi.addEventListener('click', ()=> {
            todoList.markTodoCompleted(index);
            newLi.innerHTML += '<i class="fa-solid fa-check"></i>';
        });
    });
}
console.log(localStorage.todo);