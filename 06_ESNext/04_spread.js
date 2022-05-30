const funcionario = { nome: 'Juliana', salario: 12348.99 };
const clone = { ativo: true, ...funcionario};
console.log(clone);

console.log("-------------");
const grupoA = ['João', 'Stefany', 'Rafael'];
const grupoFinal = ['Tobias', 'Pedro', ...grupoA];
console.log(grupoFinal);