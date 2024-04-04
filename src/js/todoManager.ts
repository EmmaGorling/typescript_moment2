import { TodoList } from "./toDo";
import { LocalStorageUtil } from "./localStorageUtil";

export class TodoManager {
    private todos: TodoList[] = []; // Array som håller alla todos

    constructor() {
        this.todos = LocalStorageUtil.loadTodos();
    }

    public addTodo(todo:TodoList): void {
        this.todos.push(todo);
        LocalStorageUtil.saveTodos(this.todos);
    }

    public getTodos(): TodoList[] {
        return this.todos;
    }

    public completeTodo(index:number): void {
        this.todos.splice(index, 1);
        LocalStorageUtil.saveTodos(this.todos);
    }
}