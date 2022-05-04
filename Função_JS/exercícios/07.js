function bhaskara (a, b, c){
    let resultado = [];
    let delta = (b ** 2) - (4 * a * c);

    if (delta < 0){
        return "Delta é negativo"
    }

    let x1 = (-b + Math.sqrt(delta))/(2 * a);
    resultado.push(x1);
    
    let x2 = (-b - Math.sqrt(delta))/(2 * a);
    resultado.push(x2);

    return resultado

}

console.log(bhaskara(1, 3, 2));
console.log(bhaskara(7, 2, 5));
