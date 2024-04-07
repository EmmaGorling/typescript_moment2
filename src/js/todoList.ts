import { Todo } from "./Itodo";

export class TodoList implements Todo {

    task: string;
    priority: number;
    completed: boolean;
    todos: Todo[]

    constructor(task:string, priority: number) {
        task = this.task;
        priority = this.priority;
        this.todos = [];
        this.loadFromLocalStorage();
    }

    addTodo(task: string, priority: number): boolean {
        if(task && priority >= 1 && priority <= 3) {
            
            const todo: Todo = {task, priority, completed: false}
            this.todos.push(todo);
            return true;

        } else {
            return false;
        }
    }

    markTodoCompleted(todoIndex: number): void {
        if(this.todos[todoIndex].completed = false) {
            this.todos[todoIndex].completed === true;
        }
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    saveToLocalStorage():void {
        localStorage.setItem('todos', JSON.stringify(this.todos));
    }

    loadFromLocalStorage(): void {
        const savedTodos = localStorage.getItem('todos');
        if(savedTodos) {
            this.todos = JSON.parse(savedTodos);
        }
    }

}