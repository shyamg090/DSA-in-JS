function o1_space_complexity() {
    let a = 1;
    let b = 2;
    let c = a + b;
    return c;
}

function n_space_complexity(n) {
    let sum = 0; // 1 operation
    for (let i = 0; i < n; i++) { // n operations
        sum += i; // n operations
    }
    return sum; // 1 operation -> O(1) -> Constant Space Complexity
}

function n2_space_complexity(n) {
    let newArray = [];
    for (let i = 0; i < n; i++) { // n operations
        newArray.push(i); // n operations
    }
    return newArray; // 1 operation -> O(n) -> Linear Space Complexity
}

function n3_space_complexity(n) {
    let newArray = [];
    for (let i = 0; i < n; i++) { // n operations
        for (let j = 0; j < n; j++) { // n operations
            for (let k = 0; k < n; k++) { // n operations
                newArray.push(i, j, k); // n operations
            }
        }
    }
    return newArray; // 1 operation -> O(n^3) -> Cubic Space Complexity
}

console.log(o1_space_complexity()); // 1 operation -> O(1) -> Constant Space Complexity
console.log(n_space_complexity(10)); // 1 + n + 1 = n + 2 operations -> O(n) -> Linear Space Complexity
console.log(n2_space_complexity(10)); // 1 + n + n = 2n + 1 operations -> O(n^2) -> Quadratic Space Complexity
console.log(n3_space_complexity(10)); // 1 + n + n + n = 3n + 1 operations -> O(n^3) -> Cubic Space Complexity

// graph order of space complexity Big-O Notation:
// O(log n) / O(1) -> Constant Space Complexity
// O(n) -> Linear Space Complexity
// O(n log n) -> Linear Logarithmic Space Complexity
// O(n^2) -> Quadratic Space Complexity
// O(n^3) -> Cubic Space Complexity
// O(2^n) -> Exponential Space Complexity
// O(n!) -> Factorial Space Complexity

// Points to remember :
// Multiple Algorighms can solve the same problem
// Each algorithm may differ in performance, speed, or resource usage
// The best algorithm is the one that is the most efficient in terms of time and space complexity