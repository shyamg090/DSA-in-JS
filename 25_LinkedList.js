// a class to create a node for the linkedlist
class Node {
    // constructor to create nodes
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size
    }

    // O(1) Time complexity
    prepend(value) {
        const node = new Node(value); // create a new node 
        // a)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        // or b)
        // if(!this.isEmpty()){ node.next = this.head} 
        // this.head = node;

        this.size++;
    }

    print() {
        if (this.isEmpty()) {
            console.log("list is empty!!!")
        } else {
            let current = this.head;
            let listValues = ''
            while (current) {
                // console.log(current);
                listValues += ` ${current.value}`
                current = current.next;
            }
            console.log(listValues);
        }
    }

    //O(n) time complexity
    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node
        } else {
            const prev = this.head;
            while (prev) {
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    insert(value, index) {

        if (index < 0 || index > this.getSize()) {
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else {

            const node = new Node(value);
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }

    remove(index) {
        if (this.isEmpty) {
            return;
        }

        if (index < 0 || index >= this.size) {
            return null;
        }
        let removedNode;
        if (index = 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            let deleteNode = prev.next;
            prev = deleteNode.next;
        }
        this.size--
        return removedNode.value;

    }

    // O(n) time complexity
    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }

        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--
            return value
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }

            if (prev.next) {
                removedNode = prev.next;
                prev.next = removedNode.nextthis.soze--;
                return value;
            }

            return null;
        }
    }

    reverse() {
        let prev = null;
        let curr = this.head;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }
}

const list = new linkedList();
console.log(list.getSize());
console.log(list.isEmpty());

list.prepend(10);
list.print();

list.prepend(20);
list.prepend(30);
list.prepend(40);
list.print();

// list.insert(25, 1);
list.reverse();
list.print();
