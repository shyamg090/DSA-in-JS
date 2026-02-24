// unordered collection of key value pairs 


// Objects vs MAps
// unordered --- ordered
// may contain default keys --- Does not contain keys by default
// not iterable --- iterable
// can attach functionality --- just stores the data

const maps = new Map([['a', 1], ['b', 2]]);
maps.set('c', 3);

// has one array that has smaller arrays
for (const [key, value] of maps) {
    console.log(key, " --- ", value);
}

maps.has(a) // gives true or false

maps.delete(c); // deleted 'c' 

console.log(maps.size);

maps.clear(); // clears the maps


