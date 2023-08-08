/* 

Archivo 'package.json' -> archivo descriptor de un proyecto.

-> SECCIÓN 'scripts' EN UN DOCUMENTO package.json:

    -> 'scripts': dar un nombre a un conjunto de comandos que se van a ejecutar en la terminal
        - se puede definir el script que se quiera
        - archivo json, todos tienen que tener este mismo formato
        - para correr un script:
            npm run + 'command'

    -> 'scripts' standard (scripts que suele tener todo proyecto):
        - 'test': utilizado para correr pruebas unitarias de un programa (pruebas de código de forma automática, aquí recogería el comando para recoger dichas pruebas)
            -> process.exit(1) -> error
        - 'dev': utilizado para iniciar una aplicación en modo de desarrollo
        - 'start': utilizado para iniciar una aplicación en modo de producción
            -> OJO: forma específica de correr este script (además de npm run start):
                - npm start
    
    Documentation: https://docs.npmjs.com/cli/v9/configuring-npm/package-json

    Se pueden añadir muchas más características a nuestro proyecto más allá de las que se crean por defecto al generar dicho proyectos
*/

/* Instalar paquetes:

    1. prompt-sync
    https://www.npmjs.com/package/prompt-sync

    - Instalar: 

        -> npm install prompt-sync || npm i prompt-sync
        OJO: hay que realizarla instalación del paquete al mismo nivel del package.json
        * Instalar paquete: 
        ^ -> En una versión, quiere decir que para futuras intalaciones se podrían descargar de la versión actual en adelante
             Si no se requiere en futuras instalaciones que se puedan tener en cuenta futuras versiones, se puede eliminar
             No instalar nuevas versiones en futuras instalaciones ;)

        -> Archivo 'package-lock.json'
            - Información de las dependencias y paquetes -> metainformación
            - Guarda la meta información de las depencencias de nuestro proyecto
                * Debe ser versionado
                * No debe borrarse
                * En caso de tener algún conflicto de git, se puede resolver corriendo 'npm install' para generarlo nuevamente
    

    ¿Qué se necesita de un paquete externo para poder ejecutarlo? 
    Descargar el programa como tal para poder utilizarlo.
    Descargar el código fuente del paquete :)

    FOLDER 'node_modules':
        - Contiene una carpeta por cada proyecto que se ha descargado al proyecto padre
        - La carpeta node_modules no debería versionarse (subirse a git)
          (fuera del versionamiento):
            * DEBE ESTAR EN EL MÓDULO DE .gitignore
*/



/* 
-> SECCIÓN 'dependencies' EN UN DOCUMENTO package.json: 
    - dependencies -> llave / key
    - ejecutando 'npm i' o 'npm install' se instala todos los paquetes contengan las dependencias

    Cuando se descarga una dependencia se está descargando su código fuente para poder ejecutarlo.
    El código fuente que se descarga se almacena en la carpeta 'node_modules'

*/