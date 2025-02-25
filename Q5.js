console.log("------------------------------------------------------------------------------");
console.log("Q5: Create a function that takes a LinkedList and deletes the middle node in it and returns it");

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }

    deleteMiddle() {
        if (!this.head || !this.head.next) {
            return null;
        }

        let slow = this.head;
        let fast = this.head;
        let prev = null;

        while (fast && fast.next) {
            fast = fast.next.next;
            prev = slow;
            slow = slow.next;
        }

        if (prev) {
            prev.next = slow.next;
        }

        return slow.data;
    }
}

const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);

console.log("Original Linked List:");
list.display();

const deletedMiddle = list.deleteMiddle();
console.log("Deleted Middle Node:", deletedMiddle);

console.log("Updated Linked List:");
list.display();

console.log("------------------------------------------------------------------------------");
