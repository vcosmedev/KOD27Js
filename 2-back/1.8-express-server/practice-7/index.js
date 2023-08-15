const fs = require('node:fs');

// IMPORT EXPRESS

const express = require('express');

const app = express();

app.use(express.json());

!fs.existsSync('koders.json')
    ? fs.writeFileSync('koders.json', '[]', { encoding: 'utf-8' })
    : null;

let koders = JSON.parse(fs.readFileSync('koders.json', { encoding: 'utf-8' }));

// Add koder
const add = (content) => {
    fs.writeFileSync('koders.json', JSON.stringify(content), {
        encoding: 'utf-8',
    });
};

// GET
app.get('/koders', (req, res) => {
    res.json(koders);
});

// POST
app.post('/koders', (req, res) => {
    koders.push(req.body);
    // add.apply(koders);
    res.json({ message: 'Koder adedd', koders });
});

// DELETE KODER BY ID
app.delete('/koders/:name', (req, res) => {
    const koderExists = koders.find((koder) => koder.name === req.params.name);
    if (!koderExists) {
        res.status(400);
        res.json({ message: 'Koder not found' });
        return;
    }
    const newKoders = koders.filter((koder) => koder.name !== req.params.name);
    koders = newKoders;
    add(koders);
    res.json({ message: 'Koder deleted' });
});

// DELETE ALL KODERS
app.delete('/koders', (req, res) => {
    koders = [];

    fs.writeFileSync('koders.json', JSON.stringify(koders), {
        encoding: 'utf-8',
    });
    res.json({ message: 'Koders deleted' });
});

// SERVER LISTENING
app.listen(8080, () => {
    console.log('Server listenting on port8080...');
});
