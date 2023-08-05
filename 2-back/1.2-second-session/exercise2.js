// EXERCISE 2
// Regresar si el número ingresado es par o impar

const num = process.argv[2];
const evenOrOdd = () => {
    if (isNaN(num)) {
        console.error("You must insert a number");
        process.exit(1);
    } else if (num % 2 === 0) {
        console.log("It's an even number");
        process.exit(0);
    } else {
        console.log("It's an odd number");
        process.exit(0);
    }
}
 evenOrOdd();

 const evenOrOdd2 = () => {
    if (isNaN(num)) {
        console.error("You must insert a number");
        process.exit(1);
    } else {
        if (num % 2 === 0) {
            console.log("It's an even number");
        } else {
            console.log("It's an odd number")
        }
        process.exit(0);
    }
 }
 evenOrOdd2();

 const arg = process.argv[2];
 const number = parseInt(arg); // extract a number from a string -> returned value: an actual number

 if (isNaN(number)) {
    console.error("Please, you must insert a number");
    process.exit(1);
 }

 const isEven = number % 2 === 0;
 const message = isEven ? "It's an even number" : "It's an odd number";
 console.log(message);
 process.exit(0);

 // Execute in console:
 // node exercise2.js fadaf && echo 'All good :)' -> Please, you must insert a number
 // node exercise2.js 19 && echo 'All good :)' -> It's an odd number | All good :)
 // node exercise2.js 12 && echo 'All good :)' -> It's an even number | All good :)
