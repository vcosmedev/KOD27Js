// let sample = "Hi Koders 👋🏻"; /* Declaración o definición  */

// sample = 27; /*  Reasignación  */

// let sample = true; /* Redeclaración */
// console.log(sample);

let bar = {}
console.log(bar.name); /* -> output: {name: undefined} */
bar.name = "x"; 
console.log(bar.name); /* -> output: {name: "x"} */
console.log(bar); /* -> output: {name: "x"} */
console.log(bar.name); /* -> output: "x" */

let koders = [
    "Ara",
    "Víctor",
    "Jesús"
]

let a = 59;
let b = 3;

/* Operadores aritméticos */
// + -> Adición
let add = a + b;
// - -> Sustracción
let subs = a - b;
// * -> Multiplicación
let mult = a * b;
// / -> División
let div = a / b;
// % -> Módulo
let mod = a % b;
// ++ -> Incremento
a++;
// -- -> Decremento
a--;

/* Operadores de asignación */
// = -> Asignación simple
a = 15;
// += -> Asignación aditiva
a +=8;
// -= -> Asignación sustractiva
a -= 8;
// *= -> Asignación mutiplicativa
a *= 8;
// /= -> Asignación divisiva
a /= 8;
// *% -> Asignación modular 
a %= 8;

/* Operadores de comparación */
let c = "8";
let d = 8;
// == -> Igual que
c == d; // Evalúa que el valor sea el mismo -> output: true
// Idéntico que / Estrictamente igual
c === d; // Evalúa que tanto el valor como el tipo de dato sean el miso -> output: false

// != -> Diferente
let foo = "8";
let bar2 = 8;

foo != bar2; // output: false
foo !== bar2; // output: true

/* Operadores lógicos */
// && -> AND
statmentA && statementB /* Devuelve 'true' si las condiciones A y B son verdaderas */
// // || -> OR
statementA || statementB /* Devuelve 'true' cuando al menos una de las condiciones sea verdadera */
// ! -> NOT
let baz = true;
!baz; // false

/* Se requeiere una lista que contenga solamente los nombres largos (>5) */

let names = [
    "Isra",
    "Nefer",
    "Víctor",
    "Guadalupe"
];
/* Si el nombre tiene más de 5 letras, se guarda en un array */
let result = [];

length > 5
"Israel" // -> true
"Nefer" // -> false
"Víctor" // -> true
"Guadalupe" // -> false

/* Se requiere una lista que contenga nombres largos (>5) y que comiencen con vocal */
// length > 5 && firstCharacter = ["aeiou"];

"Israel" // -> true -> se va al array
"Nefer" // -> false
"Víctor" // -> true
"Guadalupe" // -> false

// Resto operadores lógicos: >, <, >=, <=

/* Option Shift A -> Comentar únicamente código seleccionado */