// enqueue - add element to the queue
// dequeue - remove element from the queue
// peek - get the first element of the queue
// isEmpty - check if the queue is empty
// size - get the size of the queue
// print - print the queue


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return null;
        return this.items.shift(); // remove the first element of the array as its the oldest element - has linear time complexity O(n)
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
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


const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.size());
console.log(queue.isEmpty());
queue.print();