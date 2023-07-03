// Crear una función que reciba dos números y devuelva un texto con base a las siguientes condiciones:
// - Si el resultado es par, devolver "El resultado es par"
// - Si el resultado es impar, devolver "El resultado es impar"

function getNumber(number){
    if (number % 2 === 0) {
        console.log("Result is an even number")
    } else {
        console.log("Result is an odd number")
    }
    return number;
}

getNumber(4);
getNumber(7);
getNumber(10);
