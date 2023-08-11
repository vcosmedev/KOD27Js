/* 

HTTP -> HyperText Transfer Protocol
 * Http: enviar info desde un punto A a un punto B
 * Protocol: forma estandarizada de hacer ciertas acciones
 * Hypertext: letras+caracteres con habilidades aumentadas ;))) -> Permite representar en texto plano una imagen, un vídeo, un audio, etc.

Transferir texto plano de un punto a otro. Dependiendo de cómo lo leamos (audio, imagen, vídeo) estaremos trasladando un tipo de información u otro.

Dentro de este protocolo, hay reglas que se indican cómo se van a enviar estos archivos, formato, tamaño, etc.

HTTP dentro del Modelo OSI lo encontramos en la capa de aplicación (7)

Request: petición que realiza el cliente al servidor
Response: respuesta que otorga el servidor al cliente

SPA, single page application

HTTP request methods
HTTP defines a set of request methods to indicate the desired action to be performed for a given resource. Although they can also be nouns, these request methods are sometimes referred to as HTTP verbs. Each of them implements a different semantic, but some common features are shared by a group of them: e.g. a request method can be safe, idempotent, or cacheable.

* GET
The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.

* HEAD
The HEAD method asks for a response identical to a GET request, but without the response body.

* POST
The POST method submits an entity to the specified resource, often causing a change in state or side effects on the server.

* PUT
The PUT method replaces all current representations of the target resource with the request payload.

* DELETE
The DELETE method deletes the specified resource.

* CONNECT
The CONNECT method establishes a tunnel to the server identified by the target resource.

* OPTIONS
The OPTIONS method describes the communication options for the target resource.

* TRACE
The TRACE method performs a message loop-back test along the path to the target resource.

* PATCH
The PATCH method applies partial modifications to a resource.

*/
