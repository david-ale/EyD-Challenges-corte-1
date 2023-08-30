// Definir un arreglo de números
let numeros = [5, 2, 8, 1, 3];

// Acceder a un elemento por su índice (los índices empiezan en 0)
let primerNumero = numeros[0]; // 5

// Cambiar el valor de un elemento
numeros[2] = 10; // El arreglo ahora es [5, 2, 10, 1, 3]

// Agregar elementos al final del arreglo
numeros.push(7); // El arreglo ahora es [5, 2, 10, 1, 3, 7]

// Eliminar el último elemento del arreglo
numeros.pop(); // El arreglo ahora es [5, 2, 10, 1, 3]

// Agregar elementos al principio del arreglo
numeros.unshift(4); // El arreglo ahora es [4, 5, 2, 10, 1, 3]

// Eliminar el primer elemento del arreglo
numeros.shift(); // El arreglo ahora es [5, 2, 10, 1, 3]

// Encontrar el índice de un elemento en el arreglo
let indice = numeros.indexOf(10); // 2

// Eliminar elementos usando su índice
numeros.splice(1, 2); // Elimina 2 elementos a partir del índice 1

// Obtener una copia del arreglo ordenado
let numerosOrdenados = numeros.slice().sort();

// Revertir el orden de los elementos en el arreglo
numeros.reverse();

// Concatenar arreglos
let otrosNumeros = [6, 9];
let todosLosNumeros = numeros.concat(otrosNumeros); 

// Iterar a través de los elementos del arreglo con un bucle for
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Iterar a través de los elementos del arreglo con forEach
numeros.forEach(function(numero) {
  console.log(numero);
});

// Filtrar elementos que cumplan con cierta condición
let numerosPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
});

// Mapear elementos a un nuevo arreglo con alguna transformación
let numerosDobles = numeros.map(function(numero) {
  return numero * 2;
});

// Encontrar el valor máximo en el arreglo
let maximo = Math.max(...numeros); // 8

// Encontrar el valor mínimo en el arreglo
let minimo = Math.min(...numeros); // 1

// Sumar todos los elementos del arreglo
let sumaTotal = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero;
}, 0); // 19

// Encontrar el índice del valor máximo en el arreglo
let indiceMaximo = numeros.indexOf(maximo); // 2

// Convertir elementos del arreglo en una cadena
let cadenaNumeros = numeros.join(' - '); // '5 - 2 - 8 - 1 - 3'

// Verificar si todos los elementos son mayores que 3
let todosMayoresQueTres = numeros.every(function(numero) {
  return numero > 3;
}); // false

// Encontrar el primer número par
let primerPar = numeros.find(function(numero) {
  return numero % 2 === 0;
}); // 2

// Contar la cantidad de números pares
let cantidadPares = numeros.filter(function(numero) {
  return numero % 2 === 0;
}).length; // 2

// Obtener la suma de los cuadrados de los números
let sumaCuadrados = numeros.reduce(function(acumulador, numero) {
  return acumulador + numero ** 2;
}, 0); // 87

// Invertir el orden de los elementos en el arreglo
let numerosInvertidos = numeros.reverse();