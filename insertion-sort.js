function insertionSort(arr) {
    let i, len = arr.length, el, j;

    for(i=1; i<len; i++) {
        el = arr[i];
        j = i;

        while(j>0 && arr[j-1]>el) {
            arr[j] = arr[j-1];
            j--;
        }

        arr[j] = el;
        console.log(arr);
    }
    return arr;
}

const result = insertionSort([ 5, 1, 12, -5, 2, 14, 19, 13]);
console.log(result);
