// NPM -> Node Package Manager
// https://www.npmjs.com
// https://github.com/npm/npm-expansions

/* Gestor de paquetes de NodeJS, un entorno de ejecución multiplataforma que permite ejecutar Javascript no sólo en un navegador web 
(como se concibió originalmente) sino fuera de él, y poder utilizarlo en sistemas de escritorio o servidores web.

Este gestor de paquetes permite instalar de forma muy sencilla y automática paquetes Javascript (tanto de Node como Javascript 
para el navegador) para poder utilizarlos y mantenerlos en los proyectos o sistemas que se utilicen. */

/* 

1- ¿Qué es un paquete?
-> 'Pieza de software que podemos añadir a nuestro desarrollo'
-> Node nació con NPM 
2- ¿Por qué se necesita un manejador de paquetes?

3- ¿Por qué se utiliza?
-> Usar paquetes de código o adaptarlos según la necesidad del desarrollo
-> Descargar herramientas que pueden utilizarse de inmediato
-> Ejecutar paquetes sin descargarlos
-> Gestionar múltiples versiones de un código
-> Actualizar aplicación una vez se haya actualizado el código
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

/* 

Alternativas a NPM:
-> yarn: una de las primeras alternativas a NPM
-> pnpm: alternativa rápida que hace uso eficiente del espacio en disco
-> ultra: alternativa ultrarápida a NPM. Mejora aún más el rendimiento de PNPM

Utilizando 'yarn', 'pnpm' o 'ultra' seguiría el mismo proceso que utilzando 'npm' aunque sustituyendo la palabra clave del manejador de paquetes */

/* 

<package-log.json>
guarda metadata de nuestras dependencias
este archivo se genera cuando se añade el primer paquete externo

Para los casos de otros manejadores de paquetes, este archivo se llamaría según el nombre del manejador:
<yarn-log.josn>
<pnpm-log.json>
<ultra-log.json>

*/