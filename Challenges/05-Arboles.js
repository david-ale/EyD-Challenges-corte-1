class Node {
    constructor(value){
        this.value = value;            
        this.children = [];
        }
    }

class NaryTree{
    constructor(){
        this.root=null;
    }

    search(value, node = this.root) {
        if(!this.root){
            return null;
        }

        if(this.root.value === value){
            return this.root;
        }else{
            const children = node.children;
            const inChildren = children.find( item => item.value === value)
            if( inChildren){
                return inChildren
            }else{
                let hasChild;
                children.forEach( item => {
                    if(hasChild){
                        return;
                    }
                    hasChild = this.search(value,item);
                })
                return hasChild;
            }
        }
    }

    insert(value, parent){
        const newNode = new Node(value);

        if(!parent){
            if(!this.root){
                this.root = newNode;
            }else{
                return null;
            }
        }else{
            const parentNode = this.search(parent);
            parentNode.children.push( newNode );
        }
    }

    preOrder(node = this.root){
        if(!node){
            return;
        }
        console.log(node.value, node.children);

        node.children.forEach( element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root){
        if(!node){
            return;
        }

        node.children.forEach( element =>{
            this.postOrder(element);
        });
        console.log(node.value);
    }

    inOrder(node = this.root){
        if(!node){
            return;
        }

        if( node.children.length === 0){
            console.log(node.value);
        }else{
            this.inOrder(node.children[0]);
            console.log(node.value);

            for( let i = 1; i<node.children.length; i++){
                this.inOrder(node.children[i]);
            }
        }
    }
}

//crear un nuevo arbol
const nary = new NaryTree();

//crear los objetos que seran nodos de nuestro arbol
const yo = {
    nombre : "David Alejandro Sanchez",
    fechaNacimiento : "19/05/03"
}

const papa = {
    nombre: "Horacio Sanchez Valderrama",
    fechaNacimiento: "27/10/1968"
}

const abuelo = {
    nombre: "Manuel Antonio Sanchez Valderrama",
    fechaNacimiento: "20/08/1941"
}

//Implementacion
nary.insert(abuelo);
nary.insert(papa,abuelo);
nary.insert(yo,papa);

console.log("In order");
nary.inOrder();
console.log("Post Order")
nary.postOrder();
console.log("Pre Order");
nary.preOrder();
