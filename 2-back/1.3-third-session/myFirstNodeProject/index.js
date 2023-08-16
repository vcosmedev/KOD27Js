// Función 'require', función específica de Node
// Esta función permite traer el código de cualquier JS (en este caso de paquete)

// const prompt = require('prompt-sync')();
// const name = prompt('Please, enter your name: ');
// console.log(`Hi, ${name} 😊`);

// Para utilizar cualquier paquete y hacer uso de él, LEER DOCUMENTACIÓN
// https://www.npmjs.com/package/prompt-sync

// const namesList = [];

const prompt = require('prompt-sync')();
let namesList = [];

const countNames = (namesList) => namesList.length;

const findLongestName = (namesList) =>
    namesList.reduce(
        (longest, current) =>
            current.length >= longest.length ? current : longest,
        namesList[0]
    );

const findShortestName = (namesList) =>
    namesList.reduce(
        (shortest, current) =>
            current.length <= shortest.length ? current : shortest,
        namesList[0]
    );

while (true) {
    const name = prompt(
        'Please, enter your name (or leave empty space to finish): '
    );
    if (name === '') break;
    namesList.push(name);
}

let namesNumbers = countNames(namesList);
let longestName = findLongestName(namesList);
let shortestName = findShortestName(namesList);

console.log(`All names entered: ${namesList}`);
console.log(`Number of names entered: ${namesNumbers}`);
console.log(`Longest name entered: ${longestName}`);
console.log(`Shortest name entered: ${shortestName}`);
