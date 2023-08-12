// Importar http module
const http = require('node:http');

// DECLARAR SERVIDOR
const server = http.createServer((request, response) => {
    const method = request.method;
    const url = request.url;

    if (method === 'GET' && url === '/hello') {
        response.writeHead(200, {
            'Content-Type': 'text/plane',
        });
        response.end('Hello from Node Http with GET 🎉');
    } else if (method === 'POST' && url === '/hello') {
        response.writeHead(200, {
            'Content-Type': 'text/plane',
        });
        response.end('Hello from Node Http with POST 🎉');
    } else if (method === 'GET' && url === '/') {
        response.writeHead(200, {
            'Content-Type': 'text/plane',
        });
        response.end('Hello from Node Http, /, with GET 🎉');
    } else {
        response.writeHead(404, {
            'Content-Type': 'text/plane',
        });
        response.end(
            'Sorry, this route does not exit. Click here and come back home 🏡'
        );
    }

    // switch (request.method)
    // switch (method) {
    //     case 'GET':
    //         response.writeHead('200', {
    //             'Content-Type': 'text/plane',
    //         });
    //         response.end('Hello from Node Http con GET 🎉');
    //         break;
    //     case 'POST':
    //         response.writeHead('200', {
    //             'Content-Type': 'text/plane',
    //         });
    //         response.end('Hello from Node Http con POST 🎉');
    //         break;
    //     case 'PATCH':
    //         response.writeHead('200', {
    //             'Content-Type': 'text/plane',
    //         });
    //         response.end('Hello from Node Http con PATCH 🎉');
    //         break;
    //     case 'DELETE':
    //         response.writeHead('200', {
    //             'Content-Type': 'text/plane',
    //         });
    //         response.end('Hello from Node Http con DELETE 🎉');
    //         break;
    // }

    // if (method === 'GET') {
    //     // AGREGAR HEADER A LA RESPUETA
    //     response.writeHead('200', {
    //         'Content-Type': 'text/plane',
    //     });
    //     // AGREGA CONTENIDO-BODY A LA RESPUESTA
    //     response.end('Hello from Node Http con GET 🎉');
    //     // response.end('There was an error from Node http 😫');
    // } else {
    //     response.writeHead(404, { 'Content-Type': 'text/plane' });
    //     response.end('Cannot find anything for this method 😢');
    // }
});

// PONER A ESUCHAR AL SEVIDOR
server.listen(8080, () => {
    console.log('Server listening on port 8080...');
});
