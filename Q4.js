console.log("------------------------------------------------------------------------------");
console.log("Q4: Create a function that takes a LinkedList and reverses it");

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

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current) {
            next = current.next; 
            current.next = prev; 
            prev = current;      
            current = next;
        }
        
        this.head = prev;
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

list.reverse();

console.log("Reversed Linked List:");
list.display();

console.log("------------------------------------------------------------------------------");
