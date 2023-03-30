import fs from 'fs';
import read from 'readline-sync';
// we can only write text data using writeFileSync(fileName, data, options)
let text = read.question('Enter some text: ');
fs.writeFileSync('simple.txt', text + '\n', {flag: 'a+'});
console.log('data is written to the file');