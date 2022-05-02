let dobro = function (a){
    return a * 2;
};

dobro = (a) => {
    return 2 * a;
};

dobro = a => 2 * a;
console.log(dobro(Math.PI));

console.log("--------------");
let ola = function(){
    return "Olá";
};

ola = () => "Olá";
console.log(ola())

console.log("--------------");
function Pessoa(){  // this não varia em função Arrow
    this.idade = 0 

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) 
}

new Pessoa;

console.log("1--------------");
function comparaComThis(param){ 
    console.log(this === param)
}

const obj = {}
comparaComThis = (comparaComThis.bind(obj));
console.log("2--------------");
comparaComThis(global);
console.log("3--------------");
comparaComThis(obj);

console.log("4--------------");
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
console.log("5--------------");
comparaComThisArrow(module.exports)

console.log("6--------------");
comparaComThisArrow = comparaComThisArrow.bind(obj);
console.log("7--------------");
comparaComThisArrow(obj);
console.log("8--------------");
comparaComThis(module.exports);