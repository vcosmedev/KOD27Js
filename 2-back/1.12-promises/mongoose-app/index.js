// Conectarnos a la db y crear un nuevo documento en dicha db
// Script para operar con mongoose

// Schema -> Define la forma de un documento
// Model -> Generador de documentos de acuerdo al Schema

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// Variables de entorno: 'process' object -> can access through it to all environment variables

// Destructuring
const { DB_USER, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

// URL from Driver adapted
const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// SCHEMA
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 2,
        maxLenght: 10,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    program: {
        type: String,
        required: true,
        minLength: 2,
        maxLenght: 10,
    },
    generation: {
        type: Number,
        required: true,
    },
});

// MODEL
// Modelos: primera letra mayúscula
// Lo que necesitamos para crear nuestro modelo
const Koder = mongoose.model('koders', koderSchema);

// Conectar programa con db
async function main() {
    // Conectar con la db
    await mongoose.connect(URL);
    await Koder.create({
        name: 'José Manuel',
        email: 'jm@gmail.com',
        program: 'C#',
        generation: '1',
    });
    const allKoders = await Koder.find();
    console.log('All Koders: ', allKoders);
}

main()
    .then(() => console.log('Done'))
    .catch((error) => console.log('Oooops, smth went wrong', error));

// const main = async () => { await }
