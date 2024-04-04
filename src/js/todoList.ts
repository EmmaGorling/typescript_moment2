import { Todo } from "./Itodo";

export class TodoList {
    todos: Todo[]

    constructor() {
        this.todos = [];
        this.loadFromLocalStorage();
    }

    addTodo(task: string, priority: number): boolean {
        if(task && priority >= 1 && priority <= 3) {
            
            const todo: Todo = {task, priority, completed: false}
            this.todos.push(todo);
            this.saveToLocalStorage();
            return true;
            
        } else {
            return false;
        }
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