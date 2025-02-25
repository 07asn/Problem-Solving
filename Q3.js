console.log("------------------------------------------------------------------------------");
console.log("Q3: Create a function to find the sum of an array of integers using recursion");

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

const arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);
const result = sumArray(arr);
console.log("Sum of Array:", result);

console.log("------------------------------------------------------------------------------");
