class Todo {
    constructor(value,title, description, next = null){
        this.value = value;
        this.title = title;
        this.description = description;
        this.next = next
    }
}
class TodoList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(todo){
        const newTodo = new Todo(todo)

        if(!this.head){
            this.head = newTodo;
        } else {
            this.tail.next = newTodo;
        }

        this.tail = newTodo;
    }

    peek(value, current = this.head){
        if(this.head === null){
            return false
        }

        if(current !== null){
            if(current.value === value){
                return true
            } else{
                return this.peek(value, current.next)
            }
        }
    }

    size(current = this.head, acum = 1){
        if(this.head === null){
            return 0
        }

        if(current.next !== null){
            return this.size(current.next, acum = acum +1)
        }

        return acum
    }

    remove(value,current = this.head){
        if(this.head === null){
            return false
        }

        if (this.head.value === value){
            return this.head = this.head.next
        }
        
        if(current.next !== null){
            if(current.next.value === value){
                current.next = current.next.next;
                return true;
            } else {
                return this.remove(value, current.next)
            }
        }
    }

    print(){
        let todo = this.head;
        while(todo != null){
            const nextTodo = todo.next? `${todo.next.value}. Tarea: ${todo.next.title} \n Descripcion: ${todo.next.description} ` : 'No hay una siguiente tarea' ;
            console.log(` ${todo.value}. Tarea: ${todo.title} \n Descripcion: ${todo.description} \n Siguiente Tarea: ${nextTodo} `)
        }
    }
}

// Inicializar una nueva lista de Todos
const todoList = new TodoList();

// Agregar tareas a la lista
todoList.append({ value: 1, title: "Hacer compras", description: "Comprar víveres para la semana" });
todoList.append({ value: 2, title: "Hacer ejercicio", description: "Ir al gimnasio por una hora" });
todoList.append({ value: 3, title: "Estudiar", description: "Repasar para el examen de matemáticas" });

//Imprimir la lista de tareas
console.log("Lista de Tareas:");
todoList.print();