var fs = require("fs");

var data = fs.readFileSync("inputsync.txt");

console.log(data.toString());

console.log("Fim");