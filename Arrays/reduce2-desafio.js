const alunos = [
    { nome: 'Juliana', nota: 10, bolsista: false},
    { nome: 'Maria Ester', nota: 9.5, bolsista: true},
    { nome: 'Pedro', nota: 7.3, bolsista: false},
    { nome:'Ana', nota: 8.7, bolsista: true}
]

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista));