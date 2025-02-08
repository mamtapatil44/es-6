
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const n = arr.length;

    const mid = Math.floor(n / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    console.log("leftArr ", leftArr)
    console.log("rightArr ", rightArr)
    const leftSort = mergeSort(leftArr);
    const rightSort = mergeSort(rightArr);
    console.log("letfSort ", leftSort)
    console.log("rightSort ", rightSort)
    return merge(leftSort, rightSort);

}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++

        } else {
            result.push(right[j]);
            j++
        }

    }

    while (i < left.length) {
        result.push(left[i]);
        
        i++
    }
    while (j < right.length) {
        result.push(right[j]);
        j++
    }

    return result;

}
console.log("result=== ", mergeSort([34, 7, 23, 32, 5, 62]))