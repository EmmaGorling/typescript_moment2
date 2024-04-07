import { ITodo } from "./Itodo";

export class TodoList implements ITodo {
    task: string;
    priority: number;
    completed: boolean;

    // Construcor för att sätta ihop todo-oject
    constructor(task:string, priority: number, completed: boolean) {
        this.task = task;
        this.priority = priority;
        this.completed = false;
    }

    todos: ITodo[] = []; // Array för att lagra todos

    // Metod för att lägga till todo
    addTodo(task:string, priority:number): boolean {
        if( task != '' && priority >= 1 && priority <= 3) {
            return true;
        } else {
            return false;
        }
    }

    // Klarmarkera todo
    markTodoCompleted(todoIndex:number): void {
        if(this.completed === false) {
            this.completed = true
        }
    }

    getTodos(): ITodo[] {
        return this.todos;
    }

    // Spara array med todos till Local Storage
    saveToLocalStorage():void {
        localStorage.setItem('todo', JSON.stringify(this.todos))
    }

    // Hämta todos från local storage
    loadFromLocalStorage(): void {
        const todosStr = localStorage.getItem('todos');
        if (todosStr) {
            return JSON.parse(todosStr)
        }
    }
}