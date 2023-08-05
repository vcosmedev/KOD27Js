/* eurm function: myFirstFunction */

// const getRandomNumb = () =>  {
//     const random = Math.random();
//     const multiplied = random * 50;
//     const rounded = Math.floor(multiplied);
//     const result = rounded + 1;
//     return result;
// }
// console.log(getRandomNumb());

const getRandomNumbRefact = () => Math.floor(Math.random() * 50) + 1;
console.log(getRandomNumbRefact());

// const getRandomNumbS = () => {
//     const random = Math.random();
//     const multiplied = random * 12;
//     const rounded = Math.floor(multiplied);
//     const result = rounded + 1;
//     return result;
// }
// console.log(getRandomNumbS());

const getRandomNumbSRefact = () => Math.floor(Math.random() * 12) + 1;
console.log(getRandomNumbSRefact());