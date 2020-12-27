const { rejects } = require('assert');
const dns= require('dns');
const { resolve } = require('path');

const cb=(prom)=>{
    prom.then((result) => {
        console.log(result);

        dns.reverse(result,(err,hostname)=>{
            console.log(`hostname: ${hostname}`);

        });
    }).catch((err) => {
        
    });
}

const func=(cb)=>{
dns.lookup('pluralsight.com',(err,ip)=>{
    let myIP=ip;
    const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
        if(myIP){
        resolutionFunc(myIP);
        }
        else{
            rejectionFunc(null);
        }
    });

  cb(promiseA);
});};

func(cb);

console.log("immediate logging");


