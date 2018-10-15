const maxList = 100;
let i=0;
let result = [];
while(i<maxList) {
    result.push(fib(i));
    i++;
}

function fib(n) {
    if (n<=1) return n;
    return result[n-1] + result[n-2];
}

let fibonacci = result.toString();
console.log(fibonacci);
