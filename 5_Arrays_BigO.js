// insert / remove at beginning -> O(n) -> Linear Time Complexity
// insert / remove at the end -> O(1) -> Constant Time Complexity
// access -> O(1) -> Constant Time Complexity
// search -> O(n) -> Linear Time Complexity
// push / pop -> O(1) -> Constant Time Complexity
// shift / unshift -> O(n) -> Linear Time Complexity
// forEach / map / filter / reduce -> O(n) -> Linear Time Complexity

// examples for insert / remove at beginning without inbuilt methods like unshift / shift:
function insertAtBeginning(arr, value) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr[i + 1] = arr[i];
    }
    newArr[0] = value;
    return newArr;
}

function removeAtBeginning(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i + 1];
    }
    return newArr;
}

console.log(insertAtBeginning([1, 2, 3, 4, 5], 0)); // O(n) -> Linear Time Complexity
console.log(removeAtBeginning([1, 2, 3, 4, 5])); // O(n) -> Linear Time Complexity

// examples for insert / remove at the end without inbuilt methods like push / pop:
function insertAtEnd(arr, value) {
    let newArr = [...arr, value]; // O(1) -> Constant Time Complexity -> creates a new array with the new value
    return newArr;
}

function removeAtEnd(arr) {
    let newArr = arr.slice(0, -1); // O(1) -> pop operation -> removes the last element from the array
    return newArr;
}

console.log(insertAtEnd([1, 2, 3, 4, 5], 6)); // O(1) -> Constant Time Complexity -> creates a new array with the new value
console.log(removeAtEnd([1, 2, 3, 4, 5])); // O(1) -> pop operation -> removes the last element from the array

// examples for access without inbuilt methods like indexOf / findIndex:
console.log(arr[2]); // O(1) -> Constant Time Complexity -> returns the value at the given index

// examples for search without inbuilt methods like indexOf / findIndex:
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i; // O(n) -> Linear Time Complexity -> returns the index of the first occurrence of the value
        }
    }
    return -1;
}

console.log(search([1, 2, 3, 4, 5], 3)); // O(n) -> Linear Time Complexity

// examples for push / pop without inbuilt methods like push / pop:
console.log(arr.push(6)); // O(1) -> Constant Time Complexity -> adds the new value to the end of the array
console.log(arr.pop()); // O(1) -> Constant Time Complexity -> removes the last element from the array

// examples for shift / unshift with inbuilt methods:
console.log(arr.shift()); // O(n) -> Linear Time Complexity
console.log(arr.unshift(0)); // O(n) -> Linear Time Complexity

// examples for forEach / map / filter / reduce with inbuilt methods:
arr.forEach((item) => {
    console.log(item); // O(n) -> Linear Time Complexity
});

arr.map((item) => {
    return item * 2; // O(n) -> Linear Time Complexity
});

arr.filter((item) => {
    return item > 2; // O(n) -> Linear Time Complexity
});