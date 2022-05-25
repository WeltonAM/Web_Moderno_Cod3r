function calcularNotaFinal(aluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)
    console.log(notas);
    notas.sort((a,b) => a < b ? 1 : -1)
    console.log(notas);

    let mediaFinal = (notas[0] * 4 + notas[1] * 3 + notas[2] * 3)/10
    console.log(`Aluno: ${aluno}. \n Notas: ${nota1}, ${nota2}, ${nota3}. \n Resultado final: ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

calcularNotaFinal("Chico", 2.8, 6, 3.5);
calcularNotaFinal("Bento", 10, 10, 10);