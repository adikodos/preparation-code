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
        i++;
    }
    return arr;
}

const result = selectionSort([7,5,2,4,3,9]);
console.log(result);
