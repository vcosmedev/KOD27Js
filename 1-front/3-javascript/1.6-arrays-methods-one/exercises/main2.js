// 2.- Teniendo en cuenta el array numbers, necesito obtener un nuevo array que incluya únicamente los números pares *

const numbers = [12, 26, 15, 78, 26, 47];
function getEvenNunmbers() {
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) { 
        // if (numbers[i] %2 === 0) {
        //     evenNumbers.push(numbers[i])
        // }
        numbers[i] % 2 || evenNumbers.push(numbers[i]);
        // numbers[i] % 2 === 0 && evenNumbers.push(numbers[i]);
    }
    console.log(evenNumbers);
}
getEvenNunmbers(numbers);



