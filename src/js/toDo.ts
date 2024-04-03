
interface TodoInterface {
    task: string;
    completed: boolean;
    priority: number;
}

export class Todo implements TodoInterface {

    task: string;
    completed: boolean;
    priority: number;

    constructor(t: string, c: boolean, p: number) {
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

    getPriority(): number {
        return this.priority;
    }
}