var fs = require('fs')

var data = ''

var readerStream = fs.createReadStream('input.txt')

readerStream.setEncoding('utf-8')

readerStream.on('data', (chunk) => {
    data += chunk;
})

readerStream.on('end' , (err) => {

   if(err){

    console.log(err)

   }
   console.log(data)
})


