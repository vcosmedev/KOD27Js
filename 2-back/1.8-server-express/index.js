// Importar Express
const express = require('express');

const app = express(); // Crear server, invocando función

app.use(express.json()); // Añadir esta línea para que Express pueda parsear la info que recibe con el content-type JSON

let koders = [];

// LIST KODERS
app.get('/koders', (request, response) => {
    response.json(koders);
});

// ADD KODER
app.post('/koders', (request, response) => {
    koders.push(request.body); // Toma la info del body en lugar de la url que sería /koders/:name
    response.json({ message: 'Koder added', koders });
});

// DELETE KODER
app.delete('/koders/:name', (req, res) => {
    const koderExists = koders.find((koder) => koder.name === req.params.name);
    if (!koderExists) {
        res.status(404);
        res.json({ message: 'Koder not found' });
        return;
    }
    const newKoders = koders.filter((koder) => koder.name !== req.params.name);
    koders = newKoders;
    res.json({ message: 'Koder deleted', koders });
});

// SERVER LISTENING
app.listen(8080, () => {
    console.log('Server listening on port 8080');
});

// // GET /hello
// // app.get('url', 'función que se va a ejecutar');
// // Hacer que el endpoint responda con un json -> { message: "Hello from Express /json/" }
// app.get('/hello', (request, response) => {
//     // response.end('Hello from Express ;DDD');
//     // response.end(
//     //     JSON.stringify({
//     //         message: 'Hello from Express ;DDDHello from Express ;DDD',
//     //     })
//     // );
//     response.json({
//         message: 'Hello from Express ;DDDHello from Express ;DDD and .json',
//     });
// });

// // POST /
// // app.post('', '')
// app.post('/hello', (request, response) => {
//     // response.status(200); // -> Por defecto todas las respuestas llevan un status 200
//     // response.status(201);
//     // response.status(202);
//     response.json({ message: 'Hello with POST and response.json' });
// });

// // GET
// app.get('/', (request, response) => {
//     response.writeHead(200, {
//         'Content-type': 'text/plane',
//     });
//     response.end('Hello from root');
// });

// // RUTAS
// // GET /hello/:name
// // GET /hello/:charles -> Hola Vic, cómo estás
// // GET /hello/:eu -> Hola Eu, cómo estás
// app.get('/hello/:name', (request, response) => {
//     response.json({ message: `Hello ${request.params.name}` });
// });
