var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('arquivo.txt.gz'));


console.log('Arquivo Comprimido');