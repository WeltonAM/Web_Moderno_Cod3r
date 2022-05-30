function falarDepois(segundos, frase) {
    return new Promise((resolve, rejec) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000);
        // rejec(e)
    })
}

falarDepois(3, 'Que legal!')
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    // .catch(e => console.log("erro"))