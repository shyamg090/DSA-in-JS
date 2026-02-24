// search the position of given element return the position

function linerSearch(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return i
        }
    }
    return -1;
}

console.log(linerSearch([10, 12, 34, 22, 44, 56, 393], 34));
console.log(linerSearch([10, 12, 34, 22, 44, 56, 393], 77));

// O(n) - Time Complexity
