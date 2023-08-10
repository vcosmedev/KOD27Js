const fs = require('node:fs');

const dir = process.env.HOME + '/DirectoryWithFS';

fs.existsSync(dir) || fs.mkdirSync(dir);

fs.writeFileSync(dir + '/file.txt', 'Hello :)');

console.log(fs.readdirSync(dir));

fs.rmdirSync(dir, { recursive: true });

console.log(fs.existsSync(dir));
