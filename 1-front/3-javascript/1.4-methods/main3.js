// Se necesita saber la cantidad de palabras de un texto cualquiera:

// let sentence = "Hola soy Víctor esto es una frase";

function countWords(string) {
    let arr = string.split(" ");
    console.log(arr);
    console.log(arr.length);
}

countWords("Esto es una frase cualquiera");

const countWords2 = (string) => console.log(string.split(" ").length);
countWords2("Esto es una frase cualquiera 2");