function mergeSort(arr) {

    if (arr.length < 2) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid,);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let sortedArr = [];

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()); // remove from leftArr after you add it to sortedArr
        } else {
            sortedArr.push(rightArr.shift()); // remove from leftArr after you add it to sortedArr
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr];
}

// Big O - O(nlogn)