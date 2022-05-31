function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {

    let valor = await retornarValor()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)
    
    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}

// executar().then(console.log)

function retornarValorRapido() {
    return 20
}

async function executarDeVerdade() {
    const valor2 = await retornarValorRapido();
    const valor = await executar();
    console.log(valor);
    console.log(valor2);
}
executarDeVerdade()
