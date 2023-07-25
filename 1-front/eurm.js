/* eurm function: myFirstFunction */

const getRandomNumb = () =>  {
    const random = Math.random();
    const multiplied = random * 50;
    const rounded = Math.floor(multiplied);
    const result = rounded + 1;
    return result;
}
// console.log(getRandomNumb());

const getRandomNumbS = () => {
    const random = Math.random();
    const multiplied = random * 12;
    const rounded = Math.floor(multiplied);
    const result = rounded + 1;
    return result;
}
// console.log(getRandomNumbS());