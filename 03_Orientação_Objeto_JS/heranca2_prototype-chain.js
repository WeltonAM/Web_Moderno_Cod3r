Object.prototype.attr1 = 'A'; // Serve somente como exemplo

const avo = { attr2: 'B' };
const pai = { __proto__: avo, attr3: 'C' };
const filho = { __proto__: pai, attr4: 'D'};
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        } else {
            this.velAtual = this.velMax;
        }
    }, 
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modele: 'F40',
    velMax: 324 // shadowing
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // importação de propriedade PAI
    }
}

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());