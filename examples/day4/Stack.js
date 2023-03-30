export class Stack { 
    constructor() {
        this.items = [ ] ;
    }
    // adding elements in the stack
    push(item) {
        this.items.push(item);
    }
    // pop elements from the stack
    pop() {
        let item = null;
        // throw error when the size is 0
        if(this.items.length == 0) {
            throw 'Stack is empty';
        } else {
            item = this.items[this.items.length - 1];
            this.items.splice(this.items.length - 1, 1); // removes the element from the index
        }
        return item; // return the element that is popped
    }
    // get all items or throw stack empty
    getItems() {
        if(this.items.length == 0) {
            throw 'Stack is empty';
        } else {
            return this.items;
        }
    }
    // clear() method to remove all elements
    clear() {
        this.items = [];
    }
}