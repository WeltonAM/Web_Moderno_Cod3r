function real(a, b){
    return `O valor em real é: R$${(a + b).toFixed(2)}`
}

console.log(real(0.1, 0.2));
console.log(real(2, 2));
