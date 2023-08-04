console.log('Hello Koders!');

const name = 'Víctor';
console.log(`Hello ${name}!`);

// navegador: window
// elementos como alert

/*  node js 
❌ no tenemos document, tampoco window
✅ tenemos global = globalThis, process
*/

console.log(global);
console.log(process);

console.log(globalThis);

globalThis.console.log('');

console.log(process.argv); // argument vector

console.log(`Hello ${process.argv[2]}!`);
console.log(`Hello ${process.argv[3]}!`);
console.log(`Hello ${process.argv[4]}!`);

// process.argv.forEach((arg) => {
//     console.log(`Hello ${arg} :)))`)
// });

const names = process.argv.slice(2);

names.forEach((name) => {
    console.log(`Hello ${name} with slice :)`)
});

// ¿Qué podemos hacer con Node?

