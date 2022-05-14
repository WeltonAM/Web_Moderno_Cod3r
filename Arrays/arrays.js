console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array("Juliana", "Carlos", "Ana");
console.log(aprovados);

aprovados = ['Juliana', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'José';
aprovados.push('Rafinha');
console.log(aprovados.length);

aprovados[9] = 'Rafinha';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Juliana', 'Karla', 'Flor'];
aprovados.splice(1, 2);
console.log(aprovados);
aprovados.splice(1, 0, 'Maria Ester');
console.log(aprovados);