// Create promise to make a request to another server
// const promise = fetch('https://api.kodemia.com');
// console.log('promise:', promise);

// Operaciones asíncronas
// fetch('https://api.kodemiaaaaa.com')
//     .then((response) => {
//         console.log('Resuelto:', response);
//         return response.json();
//     })
//     .then((responseInJson) => {
//         console.log('Respuesta en JSON:', responseInJson);
//     })
//     .catch(() => {
//         console.log('There was an error');
//     });

// console.log('Holi');

// .then() -> se ejecuta al pasar de Pending a Resolved
// .catch() -> se ejecuta al pasar de Pending a Rejected

async function main() {
    const response = await fetch('https://api.kodemia.com');
    const responseInJson = await response.json(); // .json() -> regresa una promesa
    console.log('Respuesta en JSON con async/awaiyt:', responseInJson);
    console.log('Holii');
}
main()
    .then(() => console.log('End, all good, cooool'))
    .catch((error) => console.log('Ooops ', error));

// Promises
// https://www.w3schools.com/js/js_promise.asp
// Async-Await
// https://www.w3schools.com/js/js_async.asp
