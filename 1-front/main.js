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