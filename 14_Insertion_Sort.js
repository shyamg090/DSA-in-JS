function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let num = arr[i];
        let j = i - 1; // assuming this is the sorted part 

        while (j >= 0 && arr[j] > num) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = num;
    }
    return arr;
}

console.log(insertionSort([-6, -10, 99, 3, 4, 2]));

// Big O - O(n^2)