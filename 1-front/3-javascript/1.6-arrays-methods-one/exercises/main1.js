// 1.- Teniendo en cuenta el array numbers, necesito saber el valor de la suma total de cada número en el array

const numbers = [12, 26, 15, 78, 26, 47];

function sumNumbers() {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) { 
        result += numbers[i];
    }
    console.log(result);
}
sumNumbers(numbers);