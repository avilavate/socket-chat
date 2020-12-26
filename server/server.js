const netSock= require('net');

server = netSock.createServer();
let counter=0;
let sockets=[];

server.on('connection',(socket)=>{
    socket.id=counter++;
    sockets.push({'id':socket.id,'socket':socket});
    socket.write(`Welcome client id: ${socket.id}`)
    console.log(`server connected ${socket.id}`);
   
   
    socket.on('data',(data)=>{
    sockets.forEach(s=>{
        
        s.socket.write(` ${socket.id} `);
        s.socket.write(`${data}`);
    })
    });
    socket.setEncoding('UTF8');

    socket.on('end',()=>{
        console.log(`${socket.id}: discounnected`);
        
        delete sockets[socket.id];
    });

   });


server.getConnections((err,count)=>{
    console.log(`Connections: ${count}`);
})
server.listen(8080,() => {
    console.log('opened server on', server.address());
  });