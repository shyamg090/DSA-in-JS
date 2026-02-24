// key value - pairs 
// uses dot notation 
// it cannot be iterated by for of loop

const obj = {
    name: "Hisenberg",
    age: 23,
    "working-class": true,
    sayMyName: function () {
        console.log(this.name) // this referes to name of this object 
    }
}

console.log(obj.name); // with dot operator
console.log(obj["working-class"]); // without dot 
console.log(obj.sayMyName());


// obj.keys, obj.values, obj.entries // returns array

// insert / remove - O(1)
// access - O(1)
// search for values O(n)
// obj.keys, obj.values, obj.entries - O(n)