/* 1- Crear una función que reciba un string y devuelva el mismo string pero invertido

Hola Koders!
!sredoK aloH

No se puede usar reverse.
*/

let str = 'Hola Koders!';
function reverseString(str) {
    let newStr = "";

    for (let i = str.length - 1; i>=0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString(str));

/* 2- Crear una función que reciba un array de números y devuelva un nuevo array con los 
números en orden invertido

1,2,3,4
=> 4,3,2,1
1,2,3,4,5
=> 5,4,3,2,1 

No se puede usar reverse.
*/

let numbersArr1 = [1,2,3,4];
let numbersArr2 = [1,2,3,4,5];

function reversedNumbersArr (num) {
    let newNumbersArr = [];

    for (let i = num.length - 1; i >= 0; i-- ) {
        newNumbersArr.push(num[i]);
    }
    return newNumbersArr;
}
let reversedNumArr1 = reversedNumbersArr(numbersArr1);
console.log(reversedNumArr1);
let reversedNumArr2 = reversedNumbersArr(numbersArr2);
console.log(reversedNumArr2);


/* 3- Crear una función que reciba un número entero y que imprima en consola un 
triángulo como el siguiente:
*
**
***
****
*****
Solamente se imprime en consola */

const triangle = (size) => {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '*';
        console.log(line);
    }
    return line;
}
triangle(5);

// let asterisco = '*';
// let asteriscoRepetido = asterisco.repeat([i]);
// console.log('asteriscoRepetido', asteriscoRepetido);


/* 4- Crear una función que reciba un array con nombres de colores, 

['rojo', amarillo, azul, rojo, rojo, negro, violeta], 

debe devolver un un objeto que indique el color y la cantidad de ocurrencias de ese color

{
    rojo: 3
    amarillo: 1
    azul: 1
    negro: 1
    violeta: 1
}

*/

let colors = ['rojo', 'amarillo', 'azul', 'rojo', 'rojo', 'negro', 'violeta'];

let colorsCount = {};

for (let element of colors) {
    if (colorsCount[element]) {
        colorsCount[element] +=1;
    } else {
        colorsCount[element] = 1;
    }
}
console.log(colorsCount);


const findRepeatedProperties = (colors) => {
    let colorsCount = {};
    colors.forEach(element => {
        colorsCount[element] ? colorsCount[element] +=1 : colorsCount[element] =1;
    });
    return colorsCount;
}
console.log(findRepeatedProperties(colors));