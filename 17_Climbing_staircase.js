// at a given time you can climb one or two step so if you go third step its 2,1 can be climbed n-1 or n-2 ways

function stairCase(n) {
    const noOfWays = [1, 2]; // 1. it can be 1 or 2 step 

    // 3. for more than 2 cases 
    for (let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
    }

    return noOfWays[n - 1]; // 2. For 1 its 1 and for 2 its 2
}

console.log(stairCase(1));
console.log(stairCase(2));
console.log(stairCase(3));
console.log(stairCase(4));
console.log(stairCase(5));
