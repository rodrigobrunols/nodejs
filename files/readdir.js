//Read dir
var fs = require('fs')

console.log('read dir /home/leoncio')

fs.readdir("/home/leoncio" , (err , files)=>{300

    if(err){
        return console.error(err)
    }

    files.forEach((file) =>{

        console.log(file)
    })

})

