function fruta(frut){
    switch (frut){
        case "maçã":
            return "Não vendemos esta fruta aqui";
        case "kiwi":
            return "Estamos com escassez de kiwis.";
        case "melancia":
            return "Aqui está, são 3 reaid o quilo.";
        default:
            return "Erro"
    }
}

console.log(fruta("maçã"));
console.log(fruta("kiwi"));
console.log(fruta("melancia"));
console.log(fruta("goiaba"));