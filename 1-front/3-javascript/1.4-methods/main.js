
function myFunction(arg1, arg2) {
    let result = arg1 + arg2;
    return result; /* return explícito */
}
let conventionalResult = myFunction(10, 20);
console.log(conventionalResult);

const myArrowFunction = (arg1, arg2) => arg1 + arg2;
let arrowResult = myArrowFunction(20, 40);
console.log(arrowResult);

/* Función flecha que consiga números pares con return explícito */
const getEvents = (number) => {
    let result = number % 2 === 0 ? true : false;
    return result;
}

/* Función flecha que consiga números pares con return implícito */
const getEvents2 = (number) => number % 2 === 0;
console.log(getEvents2(4)); // output: true
console.log(getEvents2(7)); // output: false

let user = {
    name: "Víctor",
    surname: "Cosme Masa",
    greeting: (personName) => `Hi ${personName}! This is ${user.name} ${user.surname}`
};

let test1 = user.name;
console.log(test1);
let test2 = user.greeting("Israel");
console.log(test2);
let test3 = user.greeting("David");
console.log(test3);

/*
    Se necesita mostrar las iniciales del nombre completo de una persona:
    "Víctor Cosme Masa"
    "V. C. M. "
*/

//string.split(separator);
let myFullName = "Víctor Cosme Masa";

console.log(myFullName.split(" ")); // output: [ 'Víctor', 'Cosme', 'Masa' ]
console.log("Víctor".charAt(0));
console.log("Víctor".charAt(0).concat(". "));

console.log(myFullName.indexOf(" ")); /* Primer espacio en el nombre */
console.log(myFullName.charAt(myFullName.indexOf(" ") + 1));
console.log(myFullName.indexOf(" ", 7)); /* Segundo espacio en el nombre */

console.log(myFullName[0]);


/* Example */
const checkCharAtPosition = (str, position) => {
    return str[position]
    ? str[position]
    : "El número execede la cantidad de caracteres del string"
};

let testPosition1 = checkCharAtPosition("Víctor", 3);
console.log(testPosition1);
let testPosition2 = checkCharAtPosition("Víctor", 7);
console.log(testPosition2);

//false || / || null || 0 || "" (falsy)

//true   truthy => "israel"