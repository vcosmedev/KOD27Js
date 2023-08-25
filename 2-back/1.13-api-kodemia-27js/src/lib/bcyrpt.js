// Import library bcryptjs
const bcryptjs = require('bcryptjs');

const saltRound = 10;
// Agrega .(+10caracteres)

// Crear dos funciones: función para encriptar la información y función para comparar una cadena con otra
function encrypt(text) {
    // text: textToBeEncripted
    // Regresa texto ya encriptado
    return bcryptjs.hashSync(text, saltRound);
    // 10 -> salt rounds -> añade 10 caracteres random en el proceso de encriptado -> cadena resultante más segura
    // Número que no se explica de la nada es nombrado 'magic number' - Siempre hay que dar un significado
}

function verify(hash, text) {
    return bcryptjs.compareSync(text, hash);
}

// Mensaje original + llave
// En este caso, el texto en sí es la llave de cifrado

module.exports = { encrypt, verify };
