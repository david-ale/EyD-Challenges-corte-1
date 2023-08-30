class Persona {
    constructor(nombre, arrivedTime){
        this.nombre = nombre;
        this.arrivedTime = arrivedTime
    }
}

class AtmQueque {
    constructor(){
        this.queque = [];
    }

    enqueque(persona){
        this.queque.push(persona);
        return this.queque;
    }

    dequeque(){
        return this.queque.shift();
    }

    peek(){
        return this.queque[0];
    }

    size(){
        return this.queque.length;
    }

    isEmpty(){
        return this.queque.length === 0;
    }

    print(){
        console.log(this.queque);
    }
}

//Creacion de las personas
let persona1 = new Persona ("David","4:30 PM");
let persona2 = new Persona ("Ana", "6:30 PM");
let persona3 = new Persona ("Simon", "7:00 PM");

//Inicializar la cola de personas
const atmQueque = new AtmQueque();

//Añadir las personas a la cola del ATM
atmQueque.enqueque(persona1);
atmQueque.enqueque(persona2);
atmQueque.enqueque(persona3); 

//Imprimir la cola de las personas
console.log("la cola de las personas esta en el siguiente orden:");
atmQueque.print();