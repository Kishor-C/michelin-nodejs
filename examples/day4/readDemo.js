import fs from 'fs';
import {Employee} from './employee.js'
let data = fs.readFileSync("simple.txt");
console.log(data);
let str = data.toString();
let empString = str.split('|'); // empString = [Raj, 35000]
console.log(empString);
let e = new Employee(...empString); 
e.display(); // {"name":"Raj", "salary":45000}