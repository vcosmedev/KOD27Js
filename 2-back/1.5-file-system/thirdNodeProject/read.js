const fs = require('fs');

const content = fs.readFileSync('hello.txt', 'utf8');
console.log('Content: ', content);
