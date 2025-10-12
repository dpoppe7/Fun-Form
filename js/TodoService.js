// This class enapsulates CRUD operations for a todo list

export class TodoService {
    // private array: private instace field
    #todos = [];
    static STORAGE_KEY = 'dailyTodos';

    constructor() {
        // private function: load todos
        this.#load();
    }

    // getter: allows external code to read the todos array
    get todos() {
        return [...this.#todos];// returns a new array, a copy of the array instead of a reference to the original array
    }

    //setter

    // private helper functions
    #load() {
        const saved = localStorage.getItem(TodoService.STORAGE_KEY);
        this.#todos = saved ? JSON.parse(saved) : [];
    }

    //#save
    #save() {
        localStorage.setItem(TodoService.STORAGE_KEY, JSON.stringify(this.#todos)); 
    }

    //CRUD methods
    //#add
    //#updateText
    //#toggleCheck
    //#delete
}