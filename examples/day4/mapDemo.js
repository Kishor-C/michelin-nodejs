let m = new Map();
m.set('username', 'user@1234');
m.set('password', 'welcome123');
m.set('url', 'http://db.com');
m.set('url', 'http://db.com2'); // replaces the old value with the new value for the existing key

// forEach callback(value, key)
m.forEach((v, k) => console.log(`Key = ${k}, Value = ${v}`));
// getting a particular key and value
let v = m.get('username'); // returns the value of username
console.log(`Value = ${v}`);
let k = m.keys();
console.log(k.next().value)
console.log(k.next().value)
console.log(k.next().value)
