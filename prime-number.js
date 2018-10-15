const fs = require('fs');
const outfile = 'primes.txt';

let count = 0;
let maxCount = 100;
let primes = [];

let i = 2;

while(count<maxCount) {
    if (isPrime(i)) {
        primes.push(i);
        count++;
    }
    i++;
}

function isPrime(n) {
    let q = Math.sqrt(n);
    for (let i=2; i<=q; i++) {
        if (n%i === 0 || n<2) return false;
    }
    return true;
}

let result = primes.toString();

let out = result;
// fs.writeFileSync(outfile, out);
console.log(result);
