function sum(n) {
    let sum = 0; // 1 operation
    for (let i = 1; i <= n; i++) {
        sum += i; // n operations
    }
    return sum; // 1 operation
}

function sum2(n) {
    return n * (n + 1) / 2; // 1 operation -> O(1) -> Constant Time Complexity
}

function n2_loop(n) {
    for (let i = 1; i <= n; i++) { // n operations
        for (let j = 1; j <= n; j++) { // n operations
            console.log(i, j); // n * n operations -> O(n^2) -> Quadratic Time Complexity
        }
    }
}

function n3_loop(n) {
    for (let i = 1; i <= n; i++) { // n operations
        for (let j = 1; j <= n; j++) { // n operations
            for (let k = 1; k <= n; k++) { // n operations
                console.log(i, j, k); // n * n * n operations -> O(n^3) -> Cubic Time Complexity
            }
        }
    }
}

console.log(sum(10)); // 1 + n + 1 = n + 2 operations -> O(n) -> Linear Time Complexity
console.log(sum2(10)); // 1 operation -> O(1) -> Constant Time Complexity

// graph order of time complexity Big-O Notation:
// O(log n) / O(1) -> Constant Time Complexity
// O(n) -> Linear Time Complexity
// O(n log n) -> Linear Logarithmic Time Complexity
// O(n^2) -> Quadratic Time Complexity
// O(n^3) -> Cubic Time Complexity
// O(2^n) -> Exponential Time Complexity
// O(n!) -> Factorial Time Complexity


// Points to remember :
// Multiple Algorighms can solve the same problem
// Each algorithm may differ in performance, speed, or resource usage
// The best algorithm is the one that is the most efficient in terms of time and space complexity
// The best algorithm is the one that is the most efficient in terms of time and space complexity