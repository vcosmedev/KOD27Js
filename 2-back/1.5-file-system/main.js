/* 
Con Node podemos tener acceso a nuestros archivos, a nuestro FileSystem. JS en el navegador no permite esto.

FILE SYSTEM O SISTEMA DE ARCHIVOS
Todo lo que esté dentro de nuestro disco duro ya sea imágenes, texto, código, etc. Puden ser manejados con NODE.
Para poder trabajar con estos archivos realizamos operaciones CRUD.
Operaciones CRUD sobre archivos:
    1- Create
    2- Read
    3- Udpate 
    4- Delete

V8 -> escrito en C++¡
Conozcamos la documentación de NODE -> https://nodejs.org/dist/latest-v18.x/docs/api/
Certificación Node: https://openjsf.org/certification/ (saber cómo funciona Node 'por dentro')

-> FILE SYSTEM 📁
Existen diferentes formas de utilizar el file system:
    - Synchronous 
    - Callbacks
    - Promises
API (Application Programming Interface)
Todas las funciones que se van a utilizar para interactuar con el sistema de archivos
se le conoce con API, es una interfaz que nos permite relacionarnos con nuestro sistema de archivos

https://nodejs.org/dist/latest-v18.x/docs/api/fs.html#file-system

MÓDULOS IMPORTAR EN NODE

* Use promise-based APIS:
CJS CommonJS -> const fs = require('node:fs/promises');
EMS EcmaScript -> import * as fs from 'node:fs/promises';

* Use callback and sync APIS:
CJS CommonJS -> const fs = require('node:fs'); -> Para decir específicamente que son módulos nativos de Node
    - También funciona de la forma:
        -> const fs = require('fs');
EMS EcmaScript -> import * as fs from 'node:fs';

Synchronous example

try {
  unlinkSync('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (err) {
  // handle the error
}

En Node JS vamos a aprender a utilizar la importación de módulos a través de CJS.

Synchronous API

1-· CREAR UN ARCHIVO
const fs = requiere('fs);
fs.writeFilesync()

fs.writeFileSync(file, data[,options]) -> Firma de la función/método
[ Todo lo que esté dentro de corchetes, es opcional -> parámetro opcional ]

2-· LEER UN ARCHIVO
fs.readFileSync();
fs.readFileSync(path[, options]) -> Firma de la función/método

3-· ACTUALIZAR UN ARCHIVO
fs.appendfileSync();
fs.appendFileSync(path, data[, options]) -> Firma de la función/método

4-· COPIAR UN ARCHIVO
fs.copyFileSync(src, dest[, mode])

5- ELIMINAR ARCHIVO
fs.unlinkSync(path)

---------------------------------------------------------------
MOVIÉNDONOS ENTRE CARPETAS

1-· CREAR CARPETA
fs.mdkirSync()
fs.mkdirSync(path[, options])
2-· LEER CONTENIDO CARPETA
readdirSync
3-· BORRAR CARPETA VACÍA
fs.rmdirSync(path[, options])
3-· BORRAR CARPETA QUE CONTIENE ARCHIVOS


*/
