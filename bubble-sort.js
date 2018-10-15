function bubbleSort(arr) {
    const len = arr.length;
    let i = len-1;
    while(i>=0) {
        let j = 1;
        while(j<=i) {
            if (arr[j-1]>arr[j]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
            j++;
            console.log(arr);
        }
        i--;
    }
    return arr;
}

const result = bubbleSort([7,5,2,4,9,3]);
console.log(result);
