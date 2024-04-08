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
        alert('Var god ange vad som ska göras och med rätt prioritet (1-3).');
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

        // Markera uppgift som klar
        let checkIconAdd:boolean = false;
        newLi.addEventListener('click', ()=> {
            todoList.markTodoCompleted(index);
            if (todoList.getTodos()[index].completed === true && !checkIconAdd) {
                newLi.innerHTML += '<i class="fa-solid fa-check"></i>';
                checkIconAdd = true;
            }
        });
    });
};