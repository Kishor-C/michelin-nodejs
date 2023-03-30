// new approach of exporting provided in ES6
// below code is similar to module.exports.Employee = class { } 
// export function hello() { } >> module.exports.hello = function() { }
export class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log(`Name = ${this.name}, Salary = ${this.salary}`)
    }
}
// by default node.js doesn't support ES6 export & import