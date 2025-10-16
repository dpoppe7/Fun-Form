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
    //#add - adds a new todo item
    add(content = '', parentId = null) {
        const newTodo = {
            id: Date.now(),
            content: content,
            completed: false
        };

        //
        if (parentId != null) {
            const index = this.#todos.findIndex(t => t.id === parentId);
            
            if (index == -1) { // index not found: findIndex return -1
                this.#todos.push(newTodo);
            }
            else {
                this.#todos.splice(index + 1, 0, newTodo);
            }
        } else {
            this.#todos.push(newTodo);
        }

        this.#save();
        return newTodo;
    }

    //#updateText - updates content of a todo item
    updateText(newText, id) {
        const obj = this.#todos.find(t => t.id === id);
        if (obj) {
            obj.content = newText;
            this.#save();
            return true;
        }
        return false;
    }

    //#toggleCheck 
    toggleCompleted(id){
        const obj = this.#todos.find(t => t.id === id);
        if (obj) {
            obj.completed = !obj.completed;
            this.#save();
            return true;
        }
        return false;
    }

    //#delete
    delete(id){
        const arrayCurrLength = this.#todos.length;
        const arrayCopy = this.todos.filter(t => t.id !== id);

        if (arrayCopy.length < arrayCurrLength) {
            this.#todos = arrayCopy
            this.#save();
            return true;
        }
        return false;
    }
}