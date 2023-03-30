// using new feature of javascript to import the module
import { Employee } from "./employe.js";
import os from 'os'; // similar to let os = require('os')

let e = new Employee('Alex', 35000);
e.display();
console.log(`Platform: ${os.platform()}`)