// push - add element to the stack
// pop - remove element from the stack
// peek - get the top element of the stack
// isEmpty - check if the stack is empty
// size - get the size of the stack
// print - print the stack


class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return null;
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.items[this.items.length - 1]; // top element of the stack is the last element of the array as its pushed latest
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const stack = new Stack();
console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.print();

console.log(stack.pop()); // 30
console.log(stack.peek()); // 20
console.log(stack.size()); // 2
console.log(stack.isEmpty());
stack.print();