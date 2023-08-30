class Book {
    constructor(nombre,isbn,autor,editorial){
        this.nombre = nombre;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial
    }
}

class BookStack{
    constructor(){
        this.stack = [];
    }

    push(book){
        this.stack.push(book);
        return this.stack;
    }

    pop(){
        return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length - 1];
    }

    size(){
        return this.stack.length;
    }

    print(){
        console.log(this.stack);
    }
}

// Crear los libros
const book1 = new Book("El Gran Gatsby", "978-3-16-148410-0", "F. Scott Fitzgerald", "Editorial A");
const book2 = new Book("Cien años de soledad", "978-0-14-018640-7", "Gabriel García Márquez", "Editorial B");
const book3 = new Book("1984", "978-0-452-28423-4", "George Orwell", "Editorial C");

// Inicializar la pila de libros
const bookStack = new BookStack();

// Agregar los libros a la pila
bookStack.push(book1);
bookStack.push(book2);
bookStack.push(book3);

// Imprimir el contenido de la pila de libros
console.log("Contenido de la pila de libros:");
bookStack.print();