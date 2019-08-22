var fs = require('fs')

var data = 'Simples e Fácil Aprendizado'

var writeStream = fs.createWriteStream('output.txt')

writeStream.write(data , 'utf-8')
writeStream.end()

writeStream.on('finish' , ()=> {
    console.log('fim')
});

writeStream.on ('error' , (err) =>{console.log(err)})