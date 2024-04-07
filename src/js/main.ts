import { TodoList } from "./toDo";

const todoList = new TodoList();       // Skapa instans av TodoList-klassen

// När sidan laddats klart
document.addEventListener('DOMContentLoaded',  () => {
    const form = document.getElementById('form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault(); // Hindrar att formuläret skickas traditionellt
        addNewTodo();
    })
});

function addNewTodo():void {
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);

    if (todoList.addTodo(task, priority)) {
        renderTodos();
        taskInput.value = '';
        priorityInput.value = '';
    } else {
        alert('Please enter valid task & priority (1-3)');
    }

}

function renderTodos(): void {
    const todoUl = document.getElementById('todoList') as HTMLUListElement;
    todoUl.innerHTML = '';
    todoList.getTodos().forEach((todo, index) => {
        const newLi = document.createElement('li');
        newLi.innerHTML = `
           <p>${todo.task}</p>`;
        todoUl.appendChild(newLi);
    });
}
