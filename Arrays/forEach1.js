const aprovados = ['Juliana', 'Karla', 'Daniel', 'Maria Ester'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
});

console.log("--------------------");
const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

console.log("--------------------");
aprovados.forEach(nome => console.log(nome));