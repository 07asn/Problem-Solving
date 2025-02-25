import Stack from './Stack.js';

console.log("------------------------------------------------------------------------------");
console.log("Q1: Given an array arr[] of size N, you have to reverse the array using Stack");

function reverseArrayUsingStack(arr) {
    const stack = new Stack();
    arr.forEach(element => stack.push(element));

    const reversedArr = [];
    while (!stack.isEmpty()) {
        reversedArr.push(stack.pop());
    }

    return reversedArr;
}

const arr = [1, 2, 3, 4, 5];
console.log("Original Array:", arr);

const result = reverseArrayUsingStack(arr);

console.log("Reversed Array:", result);
console.log("------------------------------------------------------------------------------");

