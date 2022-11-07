//created by A3 22.9.2022//
const http = require('http')
const fs = require('fs')
const port = 3000
const server = http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':'text/html'});
fs.readFile('projectOne.html',function(error,data){
    if(error){
        res.writeHead(404);
        res.write('Hello World! Beautiful Day');
    }
    else{
        res.write(data);
    }
    res.end();
});




})
server.listen(port,function(error){
    if(error){
        console.log('Something went wrong.Check your code back',error);
    }
    else{
        console.log('Server is listening on port' +port);
    }
})
