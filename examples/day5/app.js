import express from 'express';
import parser from 'body-parser';
import { read, rewrite, write } from './employeeMapper.js';
let app = express(); // express object to create webservices
// running server in a specific port number
app.listen(9090, () => console.log('Server is running.. use control + c to stop!'));
// parser for Javascript
app.use(parser.json());

// creating webservice with get, post, put & delete with the same URL
app.get('/', (request, response) => {
    let url = request.url;
    response.status(200).json({"message":"Get mapping for "+url});
});
app.post('/', (request, response) => {
    let url = request.url;
    response.status(200).json({"message":"Post mapping for "+url});
});
// get function to read all the employees
app.get('/employees', (request, response) => {
    let emps = read('employee.json');
    // json() function can convert JS to JSON for us
    response.status(200).json(emps);
});
// post function to write an employee to the file
app.post('/employees', (request, response) => {
    let emp = request.body; // extracts the data from the request body
    write(emp, 'employee.json');
    response.status(201).json({"message":"Employee stored!"});
});
// get the employees based on name
app.get('/employees/:user', (request, response) => { 
    // reading the parameter from the path
    let name = request.params.user; 
    let employees = read('employee.json');
    let filteredEmployees = employees.filter(item => item.name === name);
    response.status(200).json(filteredEmployees);
});
// get the employees based on id, but use the url as /employees/id/:id 
// you can't have /employees/:id i.e., /employees/id/100
app.get('/employees/id/:id', (request, response) => { 
    // reading the parameter from the path
    let id = parseInt(request.params.id); 
    let employees = read('employee.json');
    let filteredEmployees = employees.filter(item => item.id === id);
    response.status(200).json(filteredEmployees);
});
// delete the employee based on id
app.delete('/employees/:id', (request, response) => { 
    let id = parseInt(request.params.id);
    let oldArray = read('employee.json');
    try {
        let flag = false;
        oldArray.forEach((item, index) => {
            if(item.id === id) {
                oldArray.splice(index, 1);
                flag = true;
            }
        });
        if(flag == true) {
            rewrite(oldArray, 'employee.json');
            response.status(200).json({"message":`Record ${id} deleted`});
        } else {
            throw `Record with an id: ${id} not found`;
        }
    } catch(err) {
        response.status(404).json({"error":err});
    }
});
