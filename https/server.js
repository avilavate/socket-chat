const https= require('https');
const httpsConfig=require('./https-config.js');
const fs= require('fs');

const server=https.createServer({
    key:fs.readFileSync('./cert/domain.key'),
    cert:fs.readFileSync('./cert/domain.crt')
});

server.on('request',(req,res)=>{
    console.log('Recieved Req');
    res.end("Hello from ssl....")
});

server.listen(httpsConfig.Config.port, ()=>console.log("Server started...."));
console.log(server.address());