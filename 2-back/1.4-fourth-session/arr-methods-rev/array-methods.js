/* 
ARRAY METHODS

forEach
map
filter
finde
some
every
reduce

*/

const koders = [
    {
        id: 1,
        first_name: 'Laurella',
        last_name: 'Tupper',
        age: 42,
        email: 'ltupper0@123-reg.co.uk',
        generation: 2,
    },
    {
        id: 2,
        first_name: 'Daron',
        last_name: 'Cockle',
        age: 18,
        email: 'dcockle1@salon.com',
        generation: 12,
    },
    {
        id: 3,
        first_name: 'Marleen',
        last_name: 'Eller',
        age: 18,
        email: 'meller2@bloglovin.com',
        generation: 11,
    },
    {
        id: 4,
        first_name: 'Worthington',
        last_name: 'Vlach',
        age: 16,
        email: 'wvlach3@taobao.com',
        generation: 22,
    },
    {
        id: 5,
        first_name: 'Wendell',
        last_name: 'Artiss',
        age: 17,
        email: 'wartiss4@microsoft.com',
        generation: 12,
    },
    {
        id: 6,
        first_name: 'Kin',
        last_name: 'Pala',
        age: 55,
        email: 'kpala5@photobucket.com',
        generation: 6,
    },
    {
        id: 7,
        first_name: 'Lucio',
        last_name: 'Bagshawe',
        age: 56,
        email: 'lbagshawe6@behance.net',
        generation: 15,
    },
    {
        id: 8,
        first_name: 'Reggy',
        last_name: 'Bullingham',
        age: 30,
        email: 'rbullingham7@fda.gov',
        generation: 2,
    },
    {
        id: 9,
        first_name: 'Clarinda',
        last_name: 'Steaning',
        age: 52,
        email: 'csteaning8@liveinternet.ru',
        generation: 22,
    },
    {
        id: 10,
        first_name: 'Karolina',
        last_name: 'Leblanc',
        age: 59,
        email: 'kleblanc9@tiny.cc',
        generation: 6,
    },
    {
        id: 11,
        first_name: 'Colet',
        last_name: 'McCuffie',
        age: 60,
        email: 'cmccuffiea@dyndns.org',
        generation: 24,
    },
    {
        id: 12,
        first_name: 'Kimble',
        last_name: 'Dovermann',
        age: 54,
        email: 'kdovermannb@gmail.com',
        generation: 3,
    },
    {
        id: 13,
        first_name: 'Janessa',
        last_name: 'Illing',
        age: 19,
        email: 'jillingc@hubpages.com',
        generation: 6,
    },
    {
        id: 14,
        first_name: 'Lani',
        last_name: 'Ricardo',
        age: 44,
        email: 'lricardod@opensource.org',
        generation: 6,
    },
    {
        id: 15,
        first_name: 'Caye',
        last_name: 'Cowmeadow',
        age: 16,
        email: 'ccowmeadowe@narod.ru',
        generation: 11,
    },
    {
        id: 16,
        first_name: 'Nataline',
        last_name: 'MacInnes',
        age: 28,
        email: 'nmacinnesf@gmail.com',
        generation: 13,
    },
    {
        id: 17,
        first_name: 'Dayna',
        last_name: 'Nimmo',
        age: 17,
        email: 'dnimmog@infoseek.co.jp',
        generation: 12,
    },
    {
        id: 18,
        first_name: 'Sheff',
        last_name: 'Normanville',
        age: 23,
        email: 'snormanvilleh@cisco.com',
        generation: 13,
    },
    {
        id: 19,
        first_name: 'Olivie',
        last_name: 'Bladesmith',
        age: 27,
        email: 'obladesmithi@newyorker.com',
        generation: 6,
    },
    {
        id: 20,
        first_name: 'Ida',
        last_name: 'Jewess',
        age: 50,
        email: 'ijewessj@ca.gov',
        generation: 9,
    },
];

// forEach() -> Ejecutar una función por cada elemento del array (n veces). No regresa nada.
// Método forEach() recibe como parámetro otra función (callbacks)
// Parámetros de un callback: simplemente son posicionales
// Ejemplo: se requiere enviar un correo a cada koder

const sendEmail = (email) => {
    console.log('Correo enviado a: ', email);
};

koders.forEach((koder, index) => {
    sendEmail(koder.email);
});

/* 
🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨🚨
Si vemos que se está utilizando un .forEach() y dentro de este un .push() ❌
En su lugar, es mejor utilizar un .map() ✅ 
*/

// map()
// Funciona como un forEach, la diferencia: otorga un retorno, genera un nuevo arreglo con los elementos TRANSFORMADOS
// Tendrá el mismo número del elementos que el array original solamente que los ha TRANSFORMADO
// Ejemplo: se requiere obtener el nombre completo de cada alumno en una sola cadena

// const fullNames = koders.map((koder, index) => {
//     const fullName = `${koder.first_name} ${koder.last_name}`;
//     return fullName;
// });
// console.log(fullNames);

// REPLICA EL REQUERIMIENTO ANTERIOR TENIENDO EN CUENTA QUE DEBE RETORNAR UN OBJETO ⤵️
const fullNames = koders.map((koder, index) => {
    const fullName = `${koder.first_name} ${koder.last_name}`;
    return fullName;
});
console.log(fullNames);

// filter()
// Filtrar una lista de elementos según criterio
// Genera un nuevo arreglo, no modifica el original
// Regresará siempre menos elementos que el array original ya que está filtrando
// Regresará siempre 'true' (si pasa el filtro) or 'false' (si no pasa el filtro)
// Ejemplo: se requiere saber cuantos koders del array de objetos 'koders' son menores de edad

/* const under18 = koders.filter((koder, index) => {
        const minor = koder.age < 18;
        return minor;
    });
    console.log(under18); */

const under18 = koders.filter((koder) => koder.age < 18);
console.log(under18);
// Filtra aquellos koders menores de edad y retorna sus nombres completos

// const under18 = koders
//     .filter((koder) => koder.age < 18)
//     .map((koder) => {
//         `${koder.first_name} ${koder.last_name}`;
//     });
// console.log(under18);

// find()
// Igual que .filter() con la diferencia de que SIEMPRE regresa UN SOLO ELEMENTO
// Encuentra y regresa el PRIMER ELEMENTO QUE CUMPLE CON UNA CONDICIÓN
// Ejemplo: se requiere encontrar al koder con id 15

const koderId15 = koders.find((koder) => koder.id === 15);
console.log('Koder con ID 15: ', koderId15);

// EJERCICIO EXTRA
// DE UNA LISTA DE GENERACIONES DE KODEMIA, DEVOLVER ÚNICAMENTE AQUELLA GENERACIÓN DE KODERS
// QUE TIENE LA PRESENTACIÓN DE KODEAWARDS MÁS CERCANA A LA FECHA DE HOY

// some()
// Al menos uno de los elementos del array cumple con la condición/criterio que se haya indicado
// Regresará 'true' si al menos uno de los elementos cumple con el criterio, 'false' si no
// Ejemplo: se requiere saber si algunos de los koders tienen correo con gmail
const atGmail = koders.some((koder) => koder.email.includes('@gmail'));
console.log('Incluye "gmail":', atGmail);

// every()
// Este elemento verifica si todos los elementos de una lista cumple con el criterio o condición indicada
// Retorna un booleano: si todos cumplen la condición, 'true'. De lo contrario, 'false'
// Ejemplo: se requiere saber si todos los koders son mayores de edad
const allOver18 = koders.every((koder) => koder.age >= 18);
console.log('¿Todos tienen carnet de conducir?:', allOver18);

// reduce()
// Cualquiera de los métodos anteriores puede ser implementado con reduce()
// reduce() method puede 'reducir' cualquier lista a lo que se desee

// Primer parámetro: una función
// Segundo parámetro: valor incial -> dependiendo de lo que queremos que devuelva, establecemos el tipo de dato

const allKodersNames = koders.reduce(
    (total, curr) => total + curr.first_name + curr.last_name,
    ''
);
console.log(allKodersNames);

const totalAge = koders.reduce((total, curr) => (total += curr.age), 0);
console.log(totalAge);
const averageAge = totalAge / koders.length;
console.log('Edad promedio Koders:', averageAge);

// return -> valor anterior ('') + (data)

// Ejemplo: se requiere saber el número de koders por generación

const kodersByGeneration = koders.reduce((total, curr) => {
    const generation = `g${curr.generation}`;
    total[generation] = (total[generation] || 0) + 1;
    return total;
}, {});
console.log('Koders por generación:', kodersByGeneration);

// Estructura hashtable -> para separar por categorías -> lista de arrays

// [1,2,3,4].forEach() -> crear array y al mismo tiempo iterarlo
