function fact(n) {
    if (n == 0) {
        return 1;
    }

    let ans = 1;
    for (let i = n; i >= 1; i--) {
        ans = ans * i
    }
    return ans;
}

console.log(fact(1));
console.log(fact(4));
console.log(fact(5));