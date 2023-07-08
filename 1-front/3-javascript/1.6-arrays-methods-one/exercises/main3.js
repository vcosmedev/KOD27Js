// Teniendo en cuenta el array 'numbers', se requiere obtener un 
// nuevo array que incluya únicametne los números impares

const numbers = [12, 26, 15, 78, 26, 47];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) { 
    // if (numbers[i] %2 === 0) {
    //     evenNumbers.push(numbers[i])
    // }
    numbers[i] % 2 === 0 || oddNumbers.push(numbers[i]);
    // numbers[i] % 2 && oddNumbers.push(numbers[i]);
}
console.log(oddNumbers);