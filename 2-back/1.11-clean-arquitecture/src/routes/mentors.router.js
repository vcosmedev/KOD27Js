const express = require('express');
const mentors = require('../useCases/mentors.useCase');

const router = express.Router();

// List Mentors
router.get('/', (req, res) => {
    const allMentors = mentors.getAll();
    res.json({
        message: 'GET mentors with clean arquitecture',
        mentors: allMentors,
    });
});

// Create Mentor
// Endpoint, controlador
router.post('/', (req, res) => {
    const { name, email, languages } = req.body;
    mentors.create(name, email, languages);
    res.json({ message: 'Mentor added' });
});

// Update Koder
// koders.update()

// Delete Koder
router.delete('/:name', (req, res) => {
    const { name } = req.params;
    mentors.remove(name);
    res.json({ message: 'Mentor deleted' });
});

module.exports = router;
