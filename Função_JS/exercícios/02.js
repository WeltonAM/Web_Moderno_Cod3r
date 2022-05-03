function classifica (a, b, c) {
    if(a == b && b == c){
        return 'O é Equilátero'
    } else if (a == b || b == c || a == c) {
        return 'O triangulo é Isósceles'
    } else { 
        return 'O triangulo é Escaleno'
    }
}

console.log(classifica(3, 3, 3));
console.log(classifica(2, 3, 3));
console.log(classifica(2, 3, 4));