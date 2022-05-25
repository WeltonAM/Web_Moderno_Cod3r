function calculadora(a, b, op){
    switch(op){
        case "soma":
            return a + b;
        case "subtração":
            return a - b; 
        case "multiplicação":
            return a * b;
        case "divisão":
            return a / b;
        default:
            return "Operação inválida";
    }
}

console.log(calculadora(2, 2, "soma"));
console.log(calculadora(2, 2, "subtração"));
console.log(calculadora(2, 2, "multiplicação"));
console.log(calculadora(2, 2, "divisão"));
console.log(calculadora(2, 2, "loucura"));