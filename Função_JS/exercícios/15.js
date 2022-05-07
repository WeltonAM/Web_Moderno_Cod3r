function comprarVeiculo(auto){
    switch(auto){
        case "hatch":
            return "Compra efetuada com sucesso.";
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            return "Tem certeza que não prefere este modelo?";
        default:
            return "Não trabalhamos com este tipo de automóvel aqui.";
    }
}

console.log(comprarVeiculo("hatch"));
console.log(comprarVeiculo("sedan"));
console.log(comprarVeiculo("motocicleta"));
console.log(comprarVeiculo("caminhonete"));
console.log(comprarVeiculo("shineray"));