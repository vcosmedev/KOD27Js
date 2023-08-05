/* 4-· Generar una función que retorne la palabara (param) al revés */
/* reverseString('Koder') -> returns 'redoK'; */

const reversedWord = (word) => word.split('').reverse().join('');
console.log(reversedWord('Koder'));
console.log(reversedWord('JavaScript'));