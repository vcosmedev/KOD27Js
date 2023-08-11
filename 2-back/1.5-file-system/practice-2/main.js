const fs = require('node:fs');
const { json } = require('stream/consumers');

const action = process.argv[2];
const name = process.argv[3];

const db = './koders.json';
const dbFile = (file) => {
    fs.writeFileSync(file, '[]', { encoding: 'utf-8' });
    fs.existsSync(db) ? console.log('Este archivo ya existe') : dbFile(db);
};

const list = fs.readFileSync(db, { encoding: 'utf-8' });
const contentAsObj = JSON.parse(list);
console.log('List koders: ', contentAsObj);

const listAsObject = JSON.parse(list);

const add = (koder) => {
    listAsObject.push({ name: koder });
    fs.writeFileSync(db, JSON.stringify(listAsObject), {
        encoding: 'utf-8',
    });
};

const remove = (koderName) => {
    !listAsObject.find((koder) => koder.name === koderName)
        ? console.log(`No se encontraron registros del koder ${koderName}`)
        : null;
    let deleteKoder = listAsObject.filter((koder) => koder.name != koderName);
    fs.writeFileSync(db, JSON.stringify(deleteKoder), {
        encoding: 'utf-8',
    });
    console.log('Koder eliminado con éxito ✅');
};

// const rm = fs.rmSync('')

switch (action) {
    case 'db':
        console.log(dbFile(db));
        break;
    case 'ls':
        list;
        break;
    case 'add':
        console.log(add(name));
        break;
    case 'rm':
        console.log(remove(name));
        break;
    case 'reset':
        break;

    default:
        console.log(
            'Please, this is not a valid input. The valid options are: "ls", "add", "rm", "reset"'
        );
        break;
}
