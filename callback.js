const fs = require('fs');
const buf = new Buffer(1024);

const data = fs.readFileSync('input.txt');
fs.readFile('input.txt', (err,data) => {
    if(err) return console.error(err);
    console.log(data.toString());
})

console.log('program ended');

// console.log('Going to open file');
// fs.open('\input.txt', 'r+', (err, fd) => {
//     if(err) {
//         return console.error(err);
//     }
//     console.log('File opened successfully');
//     fs.read(fd, buf, 0, buf.length, 0, (err, bytes) => {
//         if (err){
//            console.log(err);
//         }
//         console.log(bytes + " bytes read");
        
//         // Print only read bytes to avoid junk.
//         if(bytes > 0){
//            console.log(buf.slice(0, bytes).toString());
//         }
//      });
// });
