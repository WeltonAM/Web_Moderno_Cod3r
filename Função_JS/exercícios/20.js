function troco(valor) {
    let nota100 = 0
    let nota50 = 0
    let nota10 = 0
    let nota5 = 0
    let nota1 = 0
    let valorNota = calcularValorNota(valor)

    while (valor >= valorNota) {
        switch (valorNota) {
            case 100:
                valor -= 100
                nota100++
                break
            case 50:
                valor -= 50
                nota50++
                break
            case 10:
                valor -= 10
                nota10++
                break
            case 5:
                valor -= 5
                nota5++
                break
            case 1:
                nota1++
                valor -= 1
                break
        }

        valorNota = calcularValorNota(valor)

    }
    return elaborarResultado(nota100, nota50, nota10, nota5, nota1)
}

function calcularValorNota(valor) {
    if (valor >= 100) {
        return 100
    } else if (valor >= 50) {
        return 50
    } else if (valor >= 10) {
        return 10
    } else if (valor >= 5) {
        return 5
    } else if (valor >= 1) {
        return 1
    }
}

function elaborarResultado(nota100, nota50, nota10, nota5, nota1) {
    let resultado = ''

    if (nota100 > 0) {
        resultado += `${nota100} nota(s) de R$ 100. `
    }

    if (nota50 > 0) {
        resultado += `${nota50} nota(s) de R$ 50. `
    }

    if (nota10 > 0) {
        resultado += `${nota10} nota(s) de R$ 10. `
    }

    if (nota5 > 0) {
        resultado += `${nota5} nota(s) de R$ 5. `
    }

    if (nota1 > 0) {
        resultado += `${nota1} nota(s) de R$ 1. `
    }

    return resultado
}

console.log(troco(50));
console.log("----------");
console.log(troco(150));
console.log("----------");
console.log(troco(174));
console.log("----------");
console.log(troco(25));
console.log("----------");
console.log(troco(6));
