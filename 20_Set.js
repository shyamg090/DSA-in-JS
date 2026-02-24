// holds collection of values - but values must be unique
// can contain different data type
// dynamically sized 
// np insertion order is maintained
// finally sets are iterable


// array vs set
// can hold duplicates --- cannot hold duplicates
// insertion order --- no insertion order
// searching , deletion is faster than arrays


const set = new Set([1, 2, 3]);

for (const item of set) {
    console.log(item)
}


set.add(4); // addition
set.add(4); // ignores

set.has(3); // true or false

set.delete(3); // returns 3 after deleting

console.log(set.size) // returns sizeof set

set.clear(); // clears the set