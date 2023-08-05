// EXERCISE 3
// Crea programa que imprima los número del 1 al 100 y en cada número divisble entre 3
// que imprima 'Fizz' junto al número, en cada número divisible entre 5 que imprima
// 'Buzz' junto al número y FizzBuzz si es divisible entre ambos

// const fizzBuzz = () => {
//     for (let i=1; i<=100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log('FizzBuzz', i);
//         } else if (i % 3 === 0) {
//             console.log('Fizz', i);
//         } else if (i % 5 === 0) {
//             console.log('Buzz', i);
//         }
//     }
// }
// fizzBuzz();
// process.exit(0);


// EXERCISE 4
// Crea programa que imprima los número del 1 al número dado por el usuario y en cada número divisible 
// entre 3 que imprima 'Fizz' junto al número, en cada número divisible entre 5 que imprima
// 'Buzz' junto al número y FizzBuzz si es divisible entre ambos

// Notificar error si lo ingresado no es un número

const num = process.argv[2];
const fizzBuzz2 = (num) => {
    if (isNaN(num)) {
        console.log("Sorry, you must insert a number");
        process.exit(1);
    }
    for (let i=1; i<=num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz', i);
        } else if (i % 3 === 0) {
            console.log('Fizz', i);
        } else if (i % 5 === 0) {
            console.log('Buzz', i);
        }
    }
}
fizzBuzz2(num);
process.exit(0);