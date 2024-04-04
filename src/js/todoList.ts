import { Todo } from "./Itodo";

export class TodoList {
    todos: Todo[]

    constructor() {
        this.todos = [];
        this.loadFromLocalStorage();
    }

    addTodo(task: string, priority: number): boolean {

    }

    markTodoCompleted(todoIndex: number): void {

    }

    getTodos(): Todo[] {

    }

    saveToLocalStorage():void {
        
    }

    loadFromLocalStorage(): void {
        const savedTodos = localStorage.getItem('todos');
        if(savedTodos) {
            this.todos = JSON.parse(savedTodos);
        }
    }

}