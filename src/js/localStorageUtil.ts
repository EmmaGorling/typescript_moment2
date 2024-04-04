import { TodoList } from "./toDo";

export class LocalStorageUtil {
    static saveTodos( todos: TodoList[]) {
        localStorage.setItem('todos', JSON.stringify(todos));   // Sparar todos-array till local storage
    }

    static loadTodos(): TodoList[] {
        const todosStr = localStorage.getItem('todos');
        if(todosStr) {
            return JSON.parse(todosStr) // Om det finns todos lagrade görs de om och returneras som JSON
        } else {
            return []; // Om det inte finns några todos lagrade returneras en tom array
        }
    }
}