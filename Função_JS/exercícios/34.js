function strings (a, b) {
    let estaContido = true;
    for (let i = 0; i < a.length; i++) {
        let caractereA = a.charAt(i).toLowerCase()
        
        for(let j = 0; j < b.length; j++){
            let caractereB = b.charAt(j).toLowerCase()
            if(caractereA == caractereB) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

console.log(strings("juliana", "anajuli"))