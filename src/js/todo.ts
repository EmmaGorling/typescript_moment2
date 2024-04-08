import { Todo } from "./Itodo";

export class TodoList {

    private todos: Todo[] = []; // Array för att lagra todos

    constructor () {
        this.todos = [];
        this.loadFromLocalStorage();
    }

    // Metod för att lägga till todo
    addTodo(task:string, priority:number): boolean {
        // Kolla input-värden
        if( task != '' && priority >= 1 && priority <= 3) {
            // Skapa todo med värdena
            const newTodo: Todo = {
                task: task,
                priority: priority,
                completed: false
            };

            this.todos.push(newTodo);       // Lägg till i array
            this.saveToLocalStorage();      // Spara till LS
            return true;                    // Returnera true
        } else {
            return false;                   // Om ej rätt, returnera false
        }
    }

    // Klarmarkera todo
    markTodoCompleted(todoIndex:number): void {
        if(todoIndex >= 0 && todoIndex < this.todos.length) {
            this.todos[todoIndex].completed = true;
            this.saveToLocalStorage();
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    // Spara array med todos till Local Storage
    saveToLocalStorage():void {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    // Hämta todos från local storage
    loadFromLocalStorage(): void {
        const todosStr = localStorage.getItem('todo');
        if (todosStr) {
            this.todos = JSON.parse(todosStr)
        }
    }
}