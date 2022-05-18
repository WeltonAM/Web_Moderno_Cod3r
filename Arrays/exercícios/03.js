function salario(horas, valor) {
    let mont = horas * valor;
    let desc = mont - (mont * 30/100)
    console.log(`Salário igual a $R${(desc).toFixed(2).replace(".", ",")}`);
}

salario(180, 60);