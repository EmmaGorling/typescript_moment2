import { TodoList } from "./toDo";
import { TodoManager } from "./todoManager";

const todoManager = new TodoManager();

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todoForm') as HTMLFormElement;
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo();
    });
});

function addTodo(): void {
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);

    if( task && priority ) {
        const newTodo = new TodoList(task, true, priority);
        todoManager.addTodo(newTodo);
        taskInput.value = '';
        priorityInput.value = '';
        renderTodos();
    }
}

function renderTodos(): void {
    const todos = todoManager.getTodos();

    const todoList = document.getElementById('todo-list') as HTMLUListElement;

    if (todoList) {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');
            li.innerHTML = `${todo.task}`;

            const completeBtn = document.createElement('Button');
            completeBtn.textContent = 'Klar';
            completeBtn.className = 'completeBtn';
            completeBtn.addEventListener('click', () => completeTodo(index));
            li.appendChild(completeBtn);

            todoList.appendChild(li);
        });
    }
}

function completeTodo(index:number):void {
    todoManager.completeTodo(index);
    renderTodos();
}

renderTodos();