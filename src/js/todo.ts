import { ITodo } from "./Itodo";

export class Todo implements ITodo {
    task: string;
    priority: number;
    completed: boolean;

    constructor(task:string, priority: number, completed: boolean) {
        this.task = task;
        this.priority = priority;
        this.completed = false;
    }
}