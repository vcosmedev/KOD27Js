const createError = require('http-errors');
const bcrypt = require('../lib/bcyrpt');
const jwt = require('../lib/jwt');
const Koder = require('../models/koder.model');

async function login(email, password) {
    const koder = await Koder.findOne({ email });
    // Verify if Koder exists
    if (!koder) {
        throw new createError(401, 'Invalid data');
    }
    // Verify if password is the same as the hashed password that contains db
    const isValidPassword = bcrypt.verify(koder.password, password); // return boolean value
    if (!isValidPassword) {
        throw new createError(401, 'Invalid data');
    }
    // If credentials are ok, generate jwt
    return jwt.sign({ id: koder._id });
}

module.exports = { login };
