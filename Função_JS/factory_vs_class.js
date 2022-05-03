class Pessoa {
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Meu nome é ${this.nome}`);
    }
}

const p1 = new Pessoa ('Juliana');
p1.falar()

console.log("-----------------");
const criarPessoa = nome =>{
    return{
        falando: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa ('Karla');
p2.falando()
