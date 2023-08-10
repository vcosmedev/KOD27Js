// EXERCISE 1
// Devolver un string de caracteres 'dado la vuelta'
// Índice 1 e índice 2 es información del sistema en process.argv
function reverseString(str) {
    let newStr = "";
    for (let i=str.length - 1; i>=0; i--) {
        newStr += str[i];
    }
    return newStr;
}
console.log(reverseString(process.argv[2])); // output: aimedoK

const reverseStr = () => strReversed = process.argv[2].split('').reverse().join('');
console.log(reverseStr()); // output: aimedoK

// process.argv.forEach((name, index) => index > 1 && console.log(name.split('').reverse().join('')));

const word = process.argv[2];
const reversedWord = word.split('').reverse().join('');
console.log(reversedWord);
process.exit(0);