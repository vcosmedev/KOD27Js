// Import mongoose
const mongoose = require('mongoose');

const praticesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    repository: {
        type: String,
        required: true,
        trim: true,
        match: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/,
    },
    // Relacionar modelos
    // Modelo Prácticas está relacionado con modelo Koders. ¿Cómo se hace?
    koder: {
        // Esta propiedad tiene que ser un ID de otro documento, es una referencia de un documento
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        trim: true,
        // Nombre del modelo -> mongoose.model('koder', kodersSchema);
        ref: 'koder',
    },
    created: {
        type: Date,
        required: true,
        default: new Date(), // Ejecuta esta función cuando se crea un nuevo archivo
    },
    // Implementar lógica cada vez que se actualice
    modified: {
        type: Date,
        required: true,
        default: new Date(),
    },
});

// MODEL
// Representa una colección en la db
// Exports model to be use in useCases
module.exports = mongoose.model('pratice', praticesSchema);
