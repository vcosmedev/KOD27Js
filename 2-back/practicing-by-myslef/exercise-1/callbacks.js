/* Callback -> Es la declaración/definición de una función que pasa como parámetro
   a otra función para ser ejecutada posteriormente */

   /* 
    1. Avisar cuando hayamos llegado
    2. Avisar cuando haya comprado la despensa
    3. Avisar cuando finalmente hayamos llegado a casa
   */

const goToSupermarket = (callback) => {
    console.log('Yendo al supermercado...');
    console.log('He llegado al supermercado');
    const message = callback(null, 'Yeyyy, ya estoy en el supermercado 🙌🏻');
    console.log(message);
}

const notice = (error, message) => {
    if(error) {
        console.log('Ha ocurrido un error 😫')
    } else {
        return message;
    }
}

// Firma de un callback -> Forma en la que una función recibe sus parámetros
/* function callback (error, data) {
    if (error) {
        // Maneja el error
    }
    // continuar
} */

const pay = (callback) => {
    console.log('Pagando la despensa...')
    const message = callback(null, 'Ya pagé la despensa');
    console.log(message);
}

const home = (callback) => {
    console.log('Llegando a casa...');
    const message = callback(null, 'Ya estoy en casa sound & safe =)');
    console.log(message);
}

goToSupermarket(notice);
pay(notice);
home(notice);

// Ejecución síncrona VS Ejecución asíncrona

// Sincronismo en JS
console.log('Hello!!');
console.log('How are you?');

const num1 = 10;
const num2 = 20;

console.log('sum: ', num1 + num2);

// Asincronismo en JS
// Asíncrono

/* Función asíncrona: ocurren varias acciones al mismo tiempo Ó que múltiples cosas relacionadas 
   ocurren sin esperar que la previsa se haya completado. 
*/

console.log('Hello Koders!');

setTimeout(() => {
    console.log('Hello, Vic!')
}, 2000);

console.log('How are you?');
console.log('Bye, Vic!');