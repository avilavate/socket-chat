const udp=require('dgram');
const port=3333;
const hostname='127.0.0.1';

const udpSocket=udp.createSocket('udp4');

udpSocket.bind(port, hostname);


udpSocket.on('listening',()=>console.log('UDP server listening at 3333'));
udpSocket.on('message',(msg, rinfo)=>console.log(`${rinfo.address}:${rinfo.port} >  ${msg}`));



