import { Itodo } from "./Itodo";

export class TodoList implements Itodo {
    task: string;
    completed: boolean;
    priority: number;

    constructor ( task:string, completed: boolean, priority: number) {
        this.task = task;
        this.completed = completed;
        this.priority = priority;
    }
}