function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra string nada a ver!';
}

const aluno = 'Juliana';
const situacao = 'Aprovada!';
console.log(tag `${aluno} está ${situacao}`);