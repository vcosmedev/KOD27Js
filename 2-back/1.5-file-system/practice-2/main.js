const fs = require('node:fs');
const { json } = require('stream/consumers');

const action = process.argv[2];
const name = process.argv[3];

const db = './koders.json';

const createDb = (file) => {
    fs.writeFileSync(file, '[]', { encoding: 'utf-8' });
};

fs.existsSync(db) ? console.log('This file already exists') : createDb(db);

const list = fs.readFileSync(db, { encoding: 'utf-8' });
const contentAsObj = JSON.parse(list);
console.log('List koders: ', contentAsObj);

const listAsObject = JSON.parse(list);

const add = (koderToAdd) => {
    listAsObject.push({ name: koderToAdd });
    fs.writeFileSync(db, JSON.stringify(listAsObject), {
        encoding: 'utf-8',
    });
    console.log(`Koder "${koderToAdd}" added successfully 👨🏼‍💻✅`);
    console.log(listAsObject);
};

const remove = (koderToRemove) => {
    if (!listAsObject.find((koder) => koder.name === koderToRemove)) {
        console.log(`Sorry, no ${koderToRemove} koder records were found ❌`);
    } else {
        let deleteKoder = listAsObject.filter(
            (koder) => koder.name != koderToRemove
        );
        fs.writeFileSync(db, JSON.stringify(deleteKoder), {
            encoding: 'utf-8',
        });
        console.log(`Koder "${koderToRemove}" deleted successfully 👋🏻✅`);
    }
    console.log(listAsObject);
};

switch (action) {
    case 'ls':
        list;
        break;
    case 'add':
        add(name);
        break;
    case 'rm':
        remove(name);
        break;
    case 'reset':
        createDb(db);
        break;

    default:
        console.log(
            'Please, this is not a valid input. The valid options are: "ls", "add", "rm", "reset"'
        );
        break;
}
