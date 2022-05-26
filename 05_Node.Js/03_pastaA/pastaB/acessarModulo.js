const moduloA = require('../../01_modulos/moduloA');
console.log(moduloA.ola);

console.log("--------------");
const pastaC = require('./pastaC');
console.log(pastaC.ola2);

const http = require('http');
http.createServer((req, res) => {
    res.write('Bom dia!');
    res.end();
}).listen(8080);