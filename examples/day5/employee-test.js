import { write, read } from './employeeMapper.js';
import readline from 'readline-sync';
let option = readline.questionInt('Enter 1 to store 2 to read: ');
if(option === 1) {
    let nameEmp = readline.question('Enter name: ');
    let salaryEmp = readline.questionFloat('Enter salary: ');
    let emp = {name: nameEmp, salary: salaryEmp};
    write(emp, 'employee.json') 
} else if (option === 2) {
    let employees = read("employee.json");
    employees.forEach(item => console.log(`Name = ${item.name}, Salary = ${item.salary}`));
} else {
    console.error('You have entered a wrong option'); // in browser it appears in red color
}



