import { Todo } from "./toDo";

class TodoList {

    // Deklarera arrray som todos ska lagras i
    private todos: Todo[] = [];

    // De input-element som ska hämtas från index.html
    private task: HTMLInputElement;
    private completed: HTMLInputElement;
    private priority: HTMLInputElement; 

    

    // Lägg till ny todo med prioritet
    addTodo( task:string, priority: number ): boolean {
        if(this.priority === 1 || this.priority === 2 || this.priority === 3) {

        } else {

        }
    };

    // Markera todos som klara
    markTodoCompleted( todoIndex:number ): void {

    };

    // Hämta listan med todos
    getTodos(): Todo[] {

    };

    // Spara todos till Local Storage
    saveToLocalStorage(): void {

    };

    // Ladda in todos från Local Storage
    loadFromLocalStorage(): void {

    };
}