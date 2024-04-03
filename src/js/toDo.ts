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

    getTask(): string {
        return this.task;
    }

    getCompleted(): boolean {
        return this.completed;
    }

    getPriority(): Priority {
        return this.priority;
    }
}