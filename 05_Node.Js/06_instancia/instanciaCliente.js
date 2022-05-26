const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');

const contadorC = require('./instanciaNova')();
const contadorD = require('./instanciaNova')();

contadorA.inc();
contadorA.inc();
console.log(contadorB.valor); // por padrão faz CASH

console.log("---------------");
contadorC.inc();
contadorC.inc();
console.log(contadorD.valor, contadorC.valor)