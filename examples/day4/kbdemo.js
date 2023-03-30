import read from 'readline-sync'; // let read = require('readline-sync')
// the read name can be anything as it imports the default module
// taking string
let username = read.question('Enter your name: ');
let age = read.questionInt('Enter age: ');
console.log(`Name = ${username}, Age = ${age}`);
// use read.questionNewPassword('Enter password: ') and print password
// use read.questionEmail('Enter email: ') and print email
let pass = read.questionNewPassword('Enter password: ');
console.log(`Password = ${pass}`);
let email = read.questionEMail('Enter email: ');
console.log(`Email: ${email}`)