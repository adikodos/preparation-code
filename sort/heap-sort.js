let arr = [11,5,3,1,14,9,2,7,15,12,4];

// function heapSort(arr) {
//     let len = arr.length;
//     let end = len-1;

//     heapify(arr, len);

//     while(end > 0) {
//         swap(arr, end--, 0);
//         siftDown(arr, 0, end);
//     }
//     return arr;
// }

// function heapify(arr, len) {
//     let mid = Math.floor((len-2)/2);
//     while(mid >= 0) {
//         siftDown(arr, mid--, len-1);
//     }
// }

// function siftDown(arr, start, end) {
//     let root = start;
//     let child = root*2+1;
//     let toSwap = root;
//     console.log(arr);

//     while(child <= end) {
//         if(arr[toSwap] < arr[child]) {
//             swap(arr, toSwap, child);
//         }
//         if(child+1 <= end && arr[toSwap] < arr[child+1]) {
//             swap(arr, toSwap, child+1);
//         }
//         if(toSwap != root) {
//             swap(arr, root, toSwap);
//             root = toSwap;
//         } 
//         else {
//             return;
//         }
//         toSwap = root;
//         child = root*2+1;
//     }
// }

// function swap(arr, i, j) {
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

let array_length;

function heapSort(input) {
    array_length = input.length;

    let i = Math.floor(array_length/2);
    while(i >= 0) {
        heap_root(input, i);
        i--;
    }

    let j = input.length - 1;
    while(j > 0) {
        swap(input, 0, j);
        array_length--;  
        heap_root(input, 0);
        j--;
    }
}

function heap_root(arr, i) {
    let left = 2*i+1;
    let right = 2*i+2;
    let max = i;

    if (left < array_length && arr[left] > arr[max]) {
        max = left;
    }
    if (right < array_length && arr[right] > arr[max]) {
        max = right;
    }
    if (max != i) {
        swap(arr, i, max);
        heap_root(arr, max);
    }
}

function swap(input, i, j) {
    let temp = input[i];
    input[i] = input[j];
    input[j] = temp;
}

heapSort(arr);
console.log(arr);
