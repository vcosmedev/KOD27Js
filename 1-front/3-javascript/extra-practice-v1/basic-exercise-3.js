/* 3-· Crear una función que retorne la palabra (param1) repetida el número de veces
que se indique (param2).

repeatString('Hi!', 3)

*/

const getHelloWorldGreeting = (word, repeated) => {
    return word.repeat(repeated);
}
console.log(getHelloWorldGreeting('Olá', 3));