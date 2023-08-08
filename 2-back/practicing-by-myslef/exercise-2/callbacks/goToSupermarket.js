/* Acciones:

1. Ir al supermercado - 5000ms 
2. Pagar la despengas - 3000ms 
3. Llegar a casa - 4000 ms 

callback */

const goToSupermarket = (callback) => {
    console.log('Yendo al supermercado...');
    setTimeout(() => {
        // callback(null, 'Hola, ya llegué al supermercado ;D');
        callback('Hubo una manifestación D:', null);
    }, 5000);
}

goToSupermarket((error, message)=> {
    if(error) {
        console.log('Ha ocurrido algo:', error);
        return error; // Retorna 'undefined'
        // Detener el error, termina la ejecución aquí -> Salidas tempranas o salidas condicionales
    }
    console.log(message);
    // if...else -> Es lo mismo, código más limpio
})

// el bloque de código anterior evalúa un truthy y falsy

// truthy && falsy

// truthy -> cualquier valor que evalúa a 'true' en una pregunta/operación lógica
// ¿Qué valores evalúan 'true'?
// '', '345', 42, 3.4, {}, [] -> Con que exista 'algo'/un valor, JS lo evalúa como true 
// < Cadena vacía, string, número, número flotante, objeto, array >

const str = 'Hello';
const num = 31;
const object = {};
const array = [];

console.log('String: ', Boolean(str));
console.log('Number: ', Boolean(num));
console.log('Object: ', Boolean(object));
console.log('Array: ', Boolean(array));

// Colocar cualquier texto dentro de un 'error' se va a considerar 'true'

// falsy  
const emptyStr = '';
const zero = 0;
const nullValue = null;
const undefinedValue = undefined;

console.log('Empty string: ', Boolean(emptyStr));
console.log('Zero: ', Boolean(zero));
console.log('Null value: ', Boolean(nullValue));
console.log('Undefined value: ', Boolean(undefinedValue));