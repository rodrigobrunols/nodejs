var http = require('http');
var fs  = require('fs');
var url = require('url');

//Create Server
http.createServer((req, resp) => {
    //request contem caminho de arquivo
    var pathname = url.parse(req.url).pathname;

    fs.readFile(pathname.substr(1) , (err, data) => {
        if(err) {
            console.log(err);

            //HTTP STATUS : 404
             resp.writeHead(404 , {'Content-Type' : 'text/html'});
            }else{
                //Page Found : 200 OK
                resp.writeHead( 200 ,  {'Content-Type' : 'text/html'})

                resp.write(data.toString());
        }
        resp.end();
    });
} ).listen(8081);

console.log('Server running at http://127.0.0.1:80801//')