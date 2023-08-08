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

// if (true)
// if ({})
// if ([])
// if (42)
// if ("false")
// if (new Date())
// if (-42)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

// Colocar cualquier texto dentro de un 'error' se va a considerar 'true'

// falsy -> cualquier valor que evalúa a 'false' en una pregunta/operación lógica
const emptyStr = '';
const zero = 0;
const nullValue = null;
const undefinedValue = undefined;

// null
// undefined
// false
// NaN
// 0
// -0
// 0n
// ""	String	-> Also including '' and ``
// document.all -> Only falsy object in JS

console.log('Empty string: ', Boolean(emptyStr));
console.log('Zero: ', Boolean(zero));
console.log('Null value: ', Boolean(nullValue));
console.log('Undefined value: ', Boolean(undefinedValue));
