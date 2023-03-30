// node.js doesnt support browser related objects like document, alert, sessionStorage,...
let username = 'Alex';
console.log(`Username = ${username}`);
setTimeout(() => console.log('setTimeout is called 1'), 1000);
setTimeout(() => console.log('setTimeout is called 2'), 0);
setTimeout(() => console.log('setTimeout is called 3'), 1000); // invokes callback after 5s
console.log('done...');

