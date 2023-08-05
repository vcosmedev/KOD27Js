// Dada una lista de números, escribe una función en JavaScript que devuelva la suma de todos los números pares en la lista. 
// La función deberá iterar sobre cada número en la lista, comprobar si el número es par y, si es así, añadirlo a la 
// suma total. Usa el bucle que quieras para solucionarlo.

// while - for - for...of

// forEach()

let numbers = [2, 4, 5, 6, 7, 8, 11, 14]
function oddsSum(numbers) {
    let sum = 0
    numbers.forEach((num) => {
      num % 2 === 0 ? sum += num : null;
    })
    return sum;
  }
  console.log(oddsSum(numbers));

//   Crear una función que reciba un array de palabras y devuelva true si todas las palabras terminan con 
//   la letra "a" y false si al menos una palabra no termina con la letra "a".

words = ["Silla", "Cama", "Agua", "Manta", "Sábana"];
words2 = ["Almohada", "Lámpara", "Maceta", "Mesa", "Escritorio"];

function endWithA(words) {
    return words.every( word => (word.charAt(word.length - 1)) === "a")};
console.log(endWithA(words));
function endWithA2(words) {
    return words.every( word => (word.endsWith("a")));
}
console.log(endWithA2(words2));

// sort numbers -> sort() modify original array
let num = [12, 3, 24, 51, 9, 19, 33, 21];
let orderedNum = [...num].sort((a, b) => a - b);
console.log(num);
console.log(orderedNum);

// Recibes una lista de números. Debes ordenar los números de menor a mayor según su valor absoluto. Esto 
// quiere decir que los números negativos pierden el signo y se ordenan como si fueran positivos.

let num2 = [12, -13, 24, -5, 9, -11, 39, 21];
;
function sortAbsoluteNumbers3(num2) {
    return ([...num2].sort((a, b) => Math.abs(a) - Math.abs(b)));
}
console.log(sortAbsoluteNumbers3(num2));

// Recibes dos parámetros: una lista de palabras words y una palabra word. Primero, busca el índice de la palabra en la lista. 
// Después, usa ese índice (que será un número) y devuelve todas las palabras de words que sean más
// largas (length) que el número del índice.

// Ten en cuenta que la palabra word siempre existirá en el array, por lo que no es necesario comprobar si existe o no.

let wordsList = ["Dev","Koder", "HTML", "CSS", "JS", "Node JS", ]

function searchWords(words) {
    let result = [];
    words.forEach((word, index) => {
        word.length > index ? result.push(word) : null;
    })
    return result;
  }
console.log(searchWords(wordsList));

function buscarPalabras(words) {
    return words.reduce((accum, curr, index) => {
        index < curr.length ? accum.push(curr) : null;
        return accum;
    }, [])
}
console.log(buscarPalabras(wordsList));

