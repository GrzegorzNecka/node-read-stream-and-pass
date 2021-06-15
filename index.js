const fs = require("fs");
const { Console } = require('console');
const gzip = require('zlib').createGzip();


const stream = fs.createReadStream('./text.txt', {
  highWaterMark: 32 * 1024
});

const logs = fs.createWriteStream("./logs.txt")
const errors = fs.createWriteStream("./err.txt")


const myConsole = new Console(logs, errors)

// --- gzip compressed

const compressed = fs.createWriteStream('./text.txt.gz')
stream.pipe(gzip).pipe(compressed)

// --- 

myConsole.log("pierwsza wiadomość")
myConsole.log("druga wiadomość")
myConsole.error("wiadomość z błędem")