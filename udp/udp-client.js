const udp=require('dgram');
const config=require('./udp-config');

console.log(config);
const udpClient= udp.createSocket('udp4');

udpClient.send('Hello UDP Server',config.udpConfig.port,config.udpConfig.hostname,(err)=>{
    if(err) console.log('error occured.');

    console.log('Sent to server');
    udpClient.close();
});