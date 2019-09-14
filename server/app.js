var http = require('http');
const dataBuilder = require('./index');
const adsBuilder = require('./handle-ads');
const delayBuilder = require('./handle-delay');

http.createServer(function (req, res) {
    if (req.url.indexOf('/ads') !== -1) {
        adsBuilder(req, res)
    } else if (req.url.indexOf('/product') !== -1) {
        res.writeHead(200, {'Content-Type': 'Application/Json'}); // http header
        res.write(JSON.stringify((dataBuilder()))); //write a response
    } else {
        res.writeHead(404);
    }
    delayBuilder(res)

}).listen(3000, function(){
 console.log("server start at port 3000"); //the server object listens on port 3000
});