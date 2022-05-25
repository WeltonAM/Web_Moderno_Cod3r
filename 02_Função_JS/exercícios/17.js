function aumento(funcionario, salario){
    switch(funcionario){
        case "A":
            return salario * (1/100) + salario;
        case "B":
            return salario * (15/100) + salario;
        case "C":
            return salario * (20/100) + salario;
        default:
            return "Plano inválido."
    }
}

console.log(aumento("A", 300));
console.log(aumento("B", 300));
console.log(aumento("C", 300));
console.log(aumento("D", 300));