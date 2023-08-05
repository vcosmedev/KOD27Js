// NPM -> Node Package Manager
// https://www.npmjs.com

/* 

1- Qué es un paquete
'Pieza de software que podemos añadir a nuestro desarrollo'
Node nació con NPM 
2- Por qué necesitamos un manejador

3- Por qué se utiliza 

*/

/* ¿Cómo ocupamos npm en un proyecto? En un proyecto de Node...

PRIMER PASO: crear la carpeta que contendrá el proyecto.
Una vez dentro de la carpeta:

1- Ejecutar 'npm init'
Crea un nuevo poryecto de node al crear el archivo package.json 
Este archivo package.json es el descriptor del proyecto

2- Inicia un proceso una vez ejecutado el comando anterior:
    -> package name: poner nombre nuevo || valor por defecto (nombre de la carpeta, dejando vacío el campo)
    -> version: por defecto 1.0.0
    -> description: descripción || vacío
    -> entry point: index.js por defecto || el nombre que queramos
    -> test command
    -> git repository: agregar liga repositorio ya creado || cuando creamos un repo, se completa automáticamente
    -> keywords: tags/palabras clave para paquetes de forma que aparezca cuando buscan el paquete (completar tags separadas por espacio)
    -> author: correo, usuario github, en blanco...
    -> license: (ISC) (términos legales de un software)
    -> Is this ok? 
        {
            "name": "myfirstnodeproject",
            "version": "1.0.0",
            "description": "This is my first Node project",
            "main": "index.js",
            "scripts": {
                "test": "echo \"Error: no test specified\" && exit 1"
            },
            "keywords": [
                "node"
            ],
            "author": "",
            "license": "ISC"
        }
        -> yes

    --------> Genera un archivo package.json (metadata de un proyecto, archivo descriptor) <--------
*/