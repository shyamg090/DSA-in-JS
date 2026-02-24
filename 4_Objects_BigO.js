// insert / remove / access  -> O(1) -> Constant Time Complexity
// search / object.keys / object.values / object.entries -> O(n) -> Linear Time Complexity

// examples for insert / remove / access :
const obj = {
    name: "John",
    age: 30,
    city: "New York"
}

// insert / remove / access  -> O(1) -> Constant Time Complexity
obj.name = "Jane"; // O(1) -> Constant Time Complexity
delete obj.age; // O(1) -> Constant Time Complexity
console.log(obj.name); // O(1) -> Constant Time Complexity



// search / object.keys / object.values / object.entries -> O(n) -> Linear Time Complexity
// examples for search / object.keys / object.values / object.entries :
console.log(Object.keys(obj)); // O(n) -> Linear Time Complexity -> returns an array of the keys
console.log(Object.values(obj)); // O(n) -> Linear Time Complexity -> returns an array of the values
console.log(Object.entries(obj)); // O(n) -> Linear Time Complexity -> returns an array of the key-value pairs