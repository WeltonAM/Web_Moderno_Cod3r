console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;
console.log(module.exports);

exports = { // isso não vai ser expostado
    nome: 'Publico'
}

module.exports = { // isso vai ser exportado
    nome: 'Agora vai'
}