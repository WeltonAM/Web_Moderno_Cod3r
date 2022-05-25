function diasDaSemana(day){
    switch (day){
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return "Dia útil";
        case 7:
            return "Fim de Semana";
        default:
            return "Dia inválido";
    }
}

console.log(diasDaSemana(4));
console.log(diasDaSemana(7));
console.log(diasDaSemana(8));