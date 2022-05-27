const fs = require('fs');
const caminho = __dirname + '/arquivo.json';

// leitura de forma síncrona
const conteudo = fs.readFileSync(caminho, 'utf-8');
console.log(conteudo);


// leitura de forma assíncrona
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    console.log("----Assincrono-------------");
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
});

console.log("-----------------");
const config = require('./arquivo.json');
console.log(config.db);

console.log("-----------------");
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta:');
    console.log(arquivos)
})