function selectionSort(arr) {
    let minIdx, temp, len = arr.length;
    let i = 0;
    while(i<len) {
        minIdx = i;
        let j = i+1;
        while(j<len) {
            if (arr[j]<arr[minIdx]) minIdx = j;
            j++;
        }
        temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
        console.log(arr);
        i++;
    }
    return arr;
}

const result = selectionSort([ 5, 1, 12, -5, 2, 14, 19, 13]);
console.log(result);
