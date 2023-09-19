// Crear una función que reciba una cadena de textoy regrese la misma cadena
// pero sin vocales

// removeVowels('kodemia') // kdm
// removeVowels('javascript') // jvscrpt
// removeVowels('DEVELOPER') // DVLPR
// removeVowels('LINUX') // LNX

function removeVowels(input) {
    return input.replace(/[aeiou]/gi, '');
}

// const input = 'kodemia!';
// const result = removeVowels(input);

// console.log(`Original: ${input}`);
// console.log(`Without Vowels: ${result}`);

export default removeVowels;
