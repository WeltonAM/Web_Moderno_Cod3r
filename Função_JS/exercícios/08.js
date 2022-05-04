let pontuacao = "30, 40, 20, 10, 51, 0, 42, 38, 56, 57"

function desempenho(pontuacao){
    let pontuacaoStr = pontuacao.split(", ") 
    let maiorPt = pontuacaoStr[0]
    let qtdRecord = 0

    let menorPt = pontuacaoStr[0]
    let piorJogo = 1
    
    for(let i = 1; i < pontuacaoStr.length; i++){
        if(pontuacaoStr[i] > maiorPt){
            maiorPt = pontuacaoStr[i]
            qtdRecord++
        } else if (pontuacaoStr[i] < menorPt) {
            menorPt = pontuacaoStr[i]
            piorJogo = i + 1
        }
    }
    return [qtdRecord, piorJogo]
}

console.log(desempenho(pontuacao));