const SHA256 = require("crypto-js/sha256");


const a = res
console.log("result:  ",SHA256(a).toString())
console.log("length: ",SHA256(a).toString().length);


/*

result: e08e1d7bd3fec53b7360de39482ac30d8d1b7bedead27e013810e29095fee6fb
length: 64

*/ 


// JWT 

const header = {
    alg:'SH256',
}

const payload = {
    userid:'web7722'
}

const res = "alg:'SH256' userid:'web7722'"
