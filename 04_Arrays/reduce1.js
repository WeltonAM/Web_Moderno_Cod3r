const alunos = [
    { nome: 'Juliana', nota: 10, bolsista: false},
    { nome: 'Maria Ester', nota: 9.5, bolsista: true},
    { nome: 'Pedro', nota: 7.3, bolsista: false},
    { nome:'Ana', nota: 8.7, bolsista: true}
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado);