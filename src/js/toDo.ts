export type Priority = 1 | 2 | 3;

interface Todo {
    task: string;
    completed: boolean;
    priority: Priority;
}

export class TodoList implements Todo {

    task: string;
    completed: boolean;
    priority: Priority;
    todos: Todo[];

    constructor(t: string, c: boolean, p: Priority) {
        this.task = t;
        this.completed = c;
        this.priority = p;
    }

    addTodo( task:string, priority: Priority ): boolean {
        
    };

    markTodoCompleted( todoIndex:number ): void {

    };

    getTodos(): Todo[] {

    };

    saveToLocalStorage(): void {

    };

    loadFromLocalStorage(): void {

    };
}