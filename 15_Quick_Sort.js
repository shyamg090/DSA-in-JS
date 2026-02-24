function quickSort(arr) {

    if (arr.length < 2) { // 7. lastly add base condition 
        return arr;
    }

    let pivot = arr[arr.length - 1]; // 1. first get the pivot 
    let leftArr = []; // 2. create a left array 
    let rightArr = []; // 3. create a right array 

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            leftArr.push(arr[i]); // 4. push to left 
        } else {
            rightArr.push(arr[i]); // 5. push to right
        }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)] // 6. remaining in left and right is handled by recursion merge it with pivot
}
