// prime number - multiple of 1 and itself 

// Better Approach : O(sqrt(n))
// if n = 100, a*b is always less than or equal to Math.sqrt(n)
//  n= 24 -> a=4, b=6 and Math.sqrt(24) = 4.89 so a < Math.sqrt(24)
function prime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

// Brute Force: O(n)
function isPrime(n) {
    if (n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
    }

    return true;
}

console.log(prime(97)); // true
console.log(prime(89)); // true
console.log(prime(5)); // false
console.log("-----------------")
console.log(isPrime(97)); // true
console.log(isPrime(89)); // true
console.log(isPrime(5)); // false