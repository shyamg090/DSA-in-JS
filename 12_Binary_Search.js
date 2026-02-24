// Binary Search Algorithm - Workes only on Sorted Array 
// options - Sort the Array First and then apply the BS

function binarySearch(target, arr) {
    // 2 pointer approach

    let initial = 0;
    let final = arr.length - 1;

    while (initial <= final) {
        let middle = Math.floor((initial + final) / 2);
        if (target == arr[middle]) {
            return middle;
        }

        if (target < arr[middle]) {
            final = middle - 1;
        } else {
            initial = middle + 1;
        }
    }
    return -1;

}

console.log(binarySearch(10, [10, 22, 34, 73, 292, 838]));
console.log(binarySearch(0, [10, 22, 34, 73, 292, 838]));
console.log(binarySearch(838, [10, 22, 34, 73, 292, 838]));


//  Time Complexity - O(log n) -> reduce the size by half each iteration


// Recursive binarySearch
function recursiveBinarySearch(target, arr) {
    return search(arr, target, 0, arr.length - 1); // we make another recursive function suitable for us
}

function search(arr, target, initial, final) {
    if (initial > final) {
        return -1;
    }

    let middle = Math.floor((initial + final) / 2);
    if (target === arr[middle]) {
        return middle;
    }

    if (target < arr[middle]) {
        return search(arr, target, initial, middle - 1);
    } else {
        return search(arr, target, middle + 1, final);
    }
}

console.log(recursiveBinarySearch(10, [10, 22, 34, 73, 292, 838]));
console.log(recursiveBinarySearch(0, [10, 22, 34, 73, 292, 838]));
console.log(recursiveBinarySearch(838, [10, 22, 34, 73, 292, 838]));

//  Time Complexity - O(log n) -> reduce the size by half each iteration
