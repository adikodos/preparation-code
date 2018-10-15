const arr = [11,6,5,10,3,1,14,9,8,2,13,7,15,12,4];

function mergeSort(arr) {
    const len = arr.length;
    
    if(len<2) return arr;

    let mid = Math.floor(len/2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    console.log(`left [${left}] || right [${right}]`);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let lLen = left.length;
    let rLen = right.length;
    let l = 0;
    let r = 0;

    while(l<lLen && r<rLen) {
        if(left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
}

console.log(mergeSort(arr));
