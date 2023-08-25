// Import mongoose
const mongoose = require('mongoose');

const kodersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 50,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        minLenght: 2,
        maxLenght: 50,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
        match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, // Regex: Formato específico - Patron que seguir -> iHateRegex. Regex -> permiten trabajar con patrones de búsqueda sobre texto
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    program: {
        type: String,
        enum: ['javascript', 'python', 'ios'], // Únicos valores válidos para este campo
        required: true,
        trim: true,
    },
    created: {
        type: Date,
        required: true,
        default: new Date(), // Ejecuta esta función cuando se crea un nuevo archivo
    },
});

// MODEL
// Representa una colección en la db
module.exports = mongoose.model('koder', kodersSchema);
