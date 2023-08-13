/* 
Crear una función que reciba un nombre como parámetro y devuelva un saludo con dicho nombre
Output -> 'Hello {name}! How you doing?'
*/

// Declaración / Definición de una función 
const greeting = (name) => {
    return `Hello ${name}! How you doing?`
}
// Ejecución de una función
const greet = greeting('Víctor');
console.log(greet);
console.log(typeof greet);

/* 
Crear una función que devuelva un nombre aleatorio de un arreglo∫
*/

let namesArr = ['Gorka', 'Alessia', 'Víctor', 'Dolce', 'Beni'];

const getRandomName = () => {
    return namesArr[(Math.floor(Math.random() * namesArr.length))];
}

const randomName = getRandomName(namesArr);
console.log(randomName);

// Pasando como argumento la ejecución de una función
const greetAndName = greeting(getRandomName());
console.log(greetAndName);


const hello = (name) => {
    return `Hello, ${name}, how are you?`
}

const test = hello('Viccc');
console.log('test: ', test);

// Pasar como referencia/valor una función a otra variable
const anotherFunction = hello;
console.log(anotherFunction);

console.log(anotherFunction('VicVicVic'));

const b = hello;
console.log(b('VicVicViccc'));

// Funciones: tipo de dato de primera clase, 'ciudadanos de primera clase'

// Funciones autoejecutables
// Funciones que generan funciones (factory functions)
// Siempre que se maneje una función o método, siempre verificar qué tipo de dato regresa para manejar aquello que regresa y saber qué hacer con ello
