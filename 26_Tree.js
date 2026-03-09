class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode) // for recursion
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode; // check for one 
            } else {
                this.insertNode(root.left, newNode); // recursively call for rest
            }
        } else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true;
            } else if (value < root.value) {
                return this.search(root.left, value);
            } else {
                return this.search(root.right, value);
            }
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value); // print go left 
            this.preOrder(root.left); // cover all left
            this.preOrder(root.right); // go right
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left); // go to bottom left then
            console.log(root.value); // print then go right
            this.inOrder(root.right); // go right
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left); // visit left
            this.postOrder(root.right); // visit right
            console.log(root.value); // print
        }
    }
}

const bst = new BST();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

console.log(bst.search(bst, 10));


bst.preOrder(bst.root);
console.log("----------------------")
bst.preOrder(bst.root);
console.log("----------------------")
bst.postOrder(bst.root);


