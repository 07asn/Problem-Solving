// Q2.js
import Stack from './Stack.js';

console.log("------------------------------------------------------------------------------");
console.log("Q2: Implementing a Queue Data Structure using Two Stacks");

class QueueUsingTwoStacks {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

const queue = new QueueUsingTwoStacks();
console.log("Original Queue:");
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log("Items in the queue after enqueueing:", [10, 20, 30]);

console.log("\nDequeued Item:", queue.dequeue());

console.log("Final Queue after dequeue:");
console.log("Remaining items in the queue:", [queue.stack2.items[0], queue.stack2.items[1] || "empty"]);
console.log("------------------------------------------------------------------------------");
