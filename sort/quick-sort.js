const arr = [11,5,3,1,14,9,2,7,15,12,4];

function quickSort(arr, left, right) {
    let pivot, partitionIndex;
    if(left<right) {
        pivot = right;
        partitionIndex = partition(arr, pivot, left, right);
        quickSort(arr, left, partitionIndex-1);
        quickSort(arr, partitionIndex+1, right);
    }
    return arr;
}

function partition(arr, pivot, left, right) {
    let pivotValue = arr[pivot];
    let partitionIndex = left;
    console.log(pivotValue);
    for(let i = left; i < right; i++) {
        if(arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }
    swap(arr, right, partitionIndex);
    return partitionIndex;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

console.log(quickSort(arr, 0, arr.length-1));
