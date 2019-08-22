

var fs = require('fs');

console.log('Recuperando informações do arquivo')

fs.stat('input.txt' , (err, stats) => {
    if(err){
        return console.log(err);
    }

    console.log(stats)

    console.log('is File? ' + stats.isFile())
    console.log('is Dir? ' + stats.isDirectory())
    
    
})