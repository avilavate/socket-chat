const netSock= require('net');

server = netSock.createServer();

server.on('connection',(socket)=>{
    console.log('server connected');
    socket.on('data',(data)=>{
        console.log(data);
    });
    socket.setEncoding('UTF8');
   });


server.getConnections((err,count)=>{
    console.log(`Connections: ${count}`);
})
server.listen(8080,() => {
    console.log('opened server on', server.address());
  });
