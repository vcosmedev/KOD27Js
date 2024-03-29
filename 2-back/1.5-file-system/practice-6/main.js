const { create } = require('node:domain');
const fs = require('node:fs');
const { json } = require('stream/consumers');

const action = process.argv[2];
const name = process.argv[3];

const db = './koders.json';

const createDb = (file) => {
    fs.writeFileSync(file, '[]', { encoding: 'utf-8' });
};

!fs.existsSync(db) ? createDb(db) : null;

const list = fs.readFileSync(db, { encoding: 'utf-8' });
const listAsObject = JSON.parse(list);
console.log('List koders: ', listAsObject);

const add = (koderToAdd) => {
    listAsObject.push({ name: koderToAdd });
    fs.writeFileSync(db, JSON.stringify(listAsObject), {
        encoding: 'utf-8',
    });
    console.log(`Koder "${koderToAdd}" was added successfully 👨🏼‍💻✅`);
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
        console.log(`Koder "${koderToRemove}" was deleted successfully 👋🏻✅`);
        console.log(deleteKoder);
    }
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
