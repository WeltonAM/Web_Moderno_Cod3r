// sem promise
// setTimeout(function() {
//     console.log("Executando callback...")

//     setTimeout(function() {
//         console.log("Executando callback...")
        
//         setTimeout(function() {
//             console.log("Executando callback...")
//         }, 2000)

//     }, 2000)

// }, 2000)

// com promise
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("Executando promise...")
            resolve('vishhhhhh')
        }, tempo)
    })
}

esperarPor(3000)
    .then(console.log)
    .then(() => esperarPor()) // isso aqui é a mesma...
    .then(esperarPor) //...coisa disso aqui