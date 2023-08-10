const fs = require('fs');

/* 
1-· Crear archivo create.js
2-· Crear en este archivo una constante siendo esta un array de objetos

const obj = [
    { name: 'Víctor },
    { name: 'Moi },
    { name: 'Oli }
]
const objString = JSON.stringify(obj);
fs.wrieteFileSync('names.json', objString, 'utf-8')

*/

// Leer archivo
const content = fs.readFileSync('names.json', 'utf-8');

// JSON.parse() -> convert text into a JavaScript object
const contentAsObject = JSON.parse(content);

// typof -> Saber qué tipo de dato es 'contentAsObject'
console.log('Tipo de dato:', typeof contentAsObject);

// Añadir una nueva 'clave-valor' al objeto de nombres
contentAsObject.push({ name: 'Oli' });

// Transformar el obj que se quiere añadir a string para que lo pueda recoger el archivo .json y escribirlo en este
const addName = fs.writeFileSync('names.json', JSON.stringify(contentAsObject));
addName ? console.log('Added new name to names.jon') : null;
