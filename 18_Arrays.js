const arr = [1, 2, 3, "shyam"];

console.log(arr[0]);

arr.push(4); // to add at the end
arr.unshift(0); // to add at the beginning of the array 

for (const item of arr) {
    console.log(item);
}

arr.pop() // to remove from the end of the array 
arr.shift() // to remove from the beginning of array

// map , filter, reduce, concat, slice, splice


// insert remove at the end - O(1)
// insert remove at the Beginning - O(n) as it has to unshift
// access - O(1)
// searching - O(n)
// push - pop - O(1)
// otheres are O(n)