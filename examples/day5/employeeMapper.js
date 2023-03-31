import fs from 'fs';
// reusable function that can read a file and return an array of JS object
// Deserialization
export function read(fileName) {
    let employees = [];
    let employeesJSON = fs.readFileSync(fileName).toString();
    employees = JSON.parse(employeesJSON);
    return employees;
}
// a function that can write the data to the file
// Serialization
export function write(item, fileName) {
    // first read the file and append the item to the array
    let employees = read(fileName); // employees will be an array
    employees.push(item); // stores the item in the array
    fs.writeFileSync(fileName, JSON.stringify(employees));
}
// a function that re-writes the entire json file
export function rewrite(item, fileName) {
    fs.writeFileSync(fileName, JSON.stringify(item));
}