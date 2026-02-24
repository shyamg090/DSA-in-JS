// q) Fibonacci sequence - find first n element of the fibonacci sequence
// q) number of steps to reach the top with min steps - codeforces


function fib(n) {
    if (n == 0 || n == 1) {
        return [0, 1]
    }

    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq[i] = seq[i - 1] + seq[i - 2]; // O(n) Complexity - runs n time
    }
    return seq;
}


console.log(fib(2));
console.log(fib(3));
console.log(fib(7));
