PRÁCTICA 6

    * Crear un script que permita:
        1-· Registrar un nuevo koder [add]
        2-· Listar todos los koders [ls]
        3-· Eliminar koders por nombre [rm]
        4-· Eliminar todos los koders [reset]

    * Este script debe:
        1-· Usar un archivo .json como db
        2-· Recibir datos a través del 'argv' de Node

    * Ejemplos de la ejecución:
        1-· Listar: $ node koders.js ls
        2-· Agregar: $ node koders.js add 'name'
        3-· Borrar: $ node koders.js rm 'name'
        4-· Borrar todos: $ node koders.js reset

    * TIPS ✨
        1-· Existe función existsSync -> permite saber si un archivo existe o no
        2-· Switch puede ser útil
        3-· Los archivos solo guardan texto. Recuerda utilizar JSON.parse() y JSON.stringify()
