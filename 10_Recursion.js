// Recursion is when a function calls itself to solve a problem.

// Instead of solving the whole problem at once, it:
// Solves a smaller version of the same problem.
// Keeps doing that until a stopping condition is reached.


//  IMP : Recursion is a technique where a function calls itself until a base condition stops it. 

// Recursive - Fibonacci
function recursiveFibonacci(n) {
    if (n < 2) {
        return n;
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}


console.log(recursiveFibonacci(2));
console.log(recursiveFibonacci(3));
console.log(recursiveFibonacci(7));


//  Iterative - O(n)
// Recursive - O(2^n); not good

// Recursive Factorial
function recursiveFactorial(n) {
    if (n === 0) {
        return 1
    }

    return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(2));
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(5));


// similary
// O(n)
