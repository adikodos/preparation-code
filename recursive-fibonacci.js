const assert = require('assert');
const values = [ 0, 1, 1, 2 ];

const maxList = 5;
let i=0;
let result = [];
while(i<maxList) {
    result.push(fib(i));
    if (i<values.length) assert.equal(result[i], values[i])
    i++;
}

function fib(n) {
    if (n>1) {
        return fib(n-1) + fib(n-2);
    }
    return n;
}

let fibonacci = result.toString();
console.log(fibonacci);
