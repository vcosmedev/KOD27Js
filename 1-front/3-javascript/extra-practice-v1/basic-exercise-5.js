/* Generar una función que ayude a retornar la suma de todos los números que hay
dentro de los parámetros summAll(1,4) -> 1+2+3+4 = 10 */
const numbers = [1, 2, 3, 4]


const getSum = () => {
    const sum = numbers.reduce((total, num) => total + num);
    return sum;
} 
console.log(getSum());