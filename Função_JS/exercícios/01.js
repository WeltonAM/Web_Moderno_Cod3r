function Pessoa(nome){
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${this.nome}`)
    } 
}

const new1 = new Pessoa("Karla");
new1.falar()