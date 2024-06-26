import { TodoList } from "./todo";

const todoList = new TodoList();       // Skapa instans av TodoList-klassen

// När sidan laddats klart
document.addEventListener('DOMContentLoaded',  () => {
    // Hämta formulär med eventlistener
    const form = document.getElementById('form');
    form?.addEventListener('submit', (event) => {
        event.preventDefault(); // Hindrar att formuläret skickas traditionellt
        addNewTodo();
    });
    // Rensa lista
    const deleteBtn = document.getElementById('delete');
    deleteBtn?.addEventListener('click', () => {
        clearList();
    })

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
        // Spara till local storage
        todoList.saveToLocalStorage();
        // Uppdatera lista och rensa inputs
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

        // Kolla om todo är klarmarkerad & lägg till check-mark isåfall
        if (todo.completed) {
            const checkIcon = document.createElement('i');
            checkIcon.classList.add('fa-solid', 'fa-check');
            newLi.appendChild(checkIcon);
        }

        // Klicka på task för att klarmarkera
        newLi.addEventListener('click', ()=> {
            todoList.markTodoCompleted(index);
            const ifChecked = newLi.querySelector('.fa-check');
            if (todo.completed && !ifChecked) {
                const checkIcon = document.createElement('i');
                checkIcon.classList.add('fa-solid', 'fa-check');
                newLi.appendChild(checkIcon);
            }
        });
    });
};

// Rensa lista och local storage
function clearList():void {
    // Hämta ul
    const todoUl = document.getElementById('todoList') as HTMLUListElement;
    todoUl.innerHTML = '';
    // Rensa local storage
    localStorage.removeItem('todo');
}