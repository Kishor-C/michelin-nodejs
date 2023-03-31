import fs from 'fs';
import {Employee} from '../day4/employee.js';
let empData = fs.readFileSync('../day4/simple.txt');
let empStr = empData.toString(); // name | salary; name | salary
// we need to split the string by ; then by | on each item split with ;
let empStrItems = empStr.split(';'); // [name|salary, name|salary]
let empArray = empStrItems.map(item => {
    let e = item.split('|');
    let emp = new Employee(e[0], parseInt(e[1]));
    return emp;
});
// convert to JSON format using JSON.stringify
let empJSON = JSON.stringify(empArray);
// write json to the employees.json
fs.writeFileSync("employee.json", empJSON);
console.log('Done creating json file');