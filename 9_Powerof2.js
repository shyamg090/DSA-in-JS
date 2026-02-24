// given number is power of 2 ? 
// 5 -> is power of 2 ? no / false
// 4 -> true

function isPowerOf2(n) {
    if (n < 1) return false

    for (let i = 1; i <= n; i *= 2) {
        if (i == n) return true;
    }

    return false;
}

// Better Approach : O(1) Time Complexity
function isPowerof2_new(n) {
    // power of 2 always give 0000 bits

    if (n < 1) return false;

    if (n & (n - 1) === 0) return true; // 8 and 7 = 0 
}


console.log(isPowerOf2(10)); // false
console.log(isPowerOf2(8));  // true
console.log(isPowerOf2(64)); // true
console.log(isPowerOf2(128));// true
console.log(isPowerOf2(1));  // true
