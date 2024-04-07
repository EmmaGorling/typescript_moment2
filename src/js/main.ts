import { TodoList } from "./todoList";

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault();
        addTodo();
    });
});

function addTodo ():void {
    const taskInput = document.getElementById('task') as HTMLInputElement;
    const priorityInput = document.getElementById('priority') as HTMLInputElement;

    const task = taskInput.value;
    const priority = parseInt(priorityInput.value);

    if ( task && priority >= 1 && priority <= 3) {
        const todo = new TodoList(task, priority) 
        TodoList.addTodo(todo);

        
    }
}