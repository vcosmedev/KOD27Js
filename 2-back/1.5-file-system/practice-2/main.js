const fs = require('node:fs');
const { json } = require('stream/consumers');

const action = process.argv[2];
const name = process.argv[3];

const list = fs.readFileSync('./koders.json', 'utf8');
const contentAsObj = JSON.parse(list);
console.log('List koders: ', contentAsObj);

const JSONlist = JSON.parse(list);

const add = (koder) => {
    JSONlist.push({ name: koder });
    fs.writeFileSync('./koders.json', JSON.stringify(JSONlist), 'utf-8');
};

// const rm = fs.rmSync('')

switch (action) {
    case 'ls':
        list;
        break;
    case 'add':
        add(name);
        break;
    case 'rm':
        break;
    case 'reset':
        break;

    default:
        console.log(
            'Please, this is not a valid input. The valid options are: "ls", "add", "rm", "reset"'
        );
        break;
}
