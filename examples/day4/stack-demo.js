import { Stack } from "./Stack.js";
let stack = new Stack(); 
stack.push(20);
stack.push(30);
try {
    console.log(stack.getItems());
    stack.pop(); // it returns 30
    stack.pop();  // it returns 20
    stack.pop();  // throws error
    
    // console.log(`Popped: ${stack.pop()}`);
    // console.log(`Popped: ${stack.pop()}`);
    // console.log(`Popped: ${stack.pop()}`);
    // console.log(`Popped: ${stack.pop()}`);
    // console.log(`Popped: ${stack.pop()}`);
} catch(err) {
    console.log('-------------------Error Occured------------------');
    console.log(err);
}
console.log('*** DONE ****');
