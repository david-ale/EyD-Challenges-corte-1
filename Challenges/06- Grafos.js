class Graph{
    constructor(){
        this.nodes = [];
        this.adjList = {};
    }

    addNode(node) {
        this.nodes.push(node)
        this.adjList[node] = []
    }

    addEdge( node1, node2 ) {
        this.adjList[node1].push(node2); 
        this.adjList[node2].push(node1);
        }
    
    searchNode( value ) { 
        if (!this.nodes.length) {
            return;
        }
        return this.nodes.find( item => item === value );
    }

    printAdjacency ( value ) {
        if (this.searchNode( value )) { 
            console.log( this.adjList[ value ] )
        } else {
            return;
        }
    }
}
//crear un nuevo grafo
const amigosCiudades = new Graph();

//crear los objetos que seran nodos de nuestro grafo
const amigo1 = {
    nombre:"Simon",
    edad:32
}

const amigo2 = {
    nombre:"Juan",
    edad:17
}

const amigo3 = {
    nombre:"David",
    edad:23
}

const amigo4 = {
    nombre:"Ana",
    edad:19
}

const amigo5 = {
    nombre:"Andres",
    edad:22
}

const ciudad1 = {
    nombre:"Medellin"
}

const ciudad2 = {
    nombre:"Ibague"
}

//implementacion
amigosCiudades.addNode(ciudad1);
amigosCiudades.addNode(ciudad2);
amigosCiudades.addNode(amigo1);
amigosCiudades.addNode(amigo2);
amigosCiudades.addNode(amigo3);
amigosCiudades.addNode(amigo4);
amigosCiudades.addNode(amigo5);
amigosCiudades.addEdge(amigo1,ciudad1);
amigosCiudades.addEdge(amigo2,ciudad1);
amigosCiudades.addEdge(amigo3,ciudad2);
amigosCiudades.addEdge(amigo4,ciudad2);
amigosCiudades.addEdge(amigo5,ciudad2);
amigosCiudades.printAdjacency(ciudad1);