//Higher-order function

//Literal
function fun1() { };

//armazenar em variável
const fun2 = function() { };

//armazenar em array
const array = [function(a, b) {return a + b}, fun1, fun2];
console.log(array[0](2, 3));

//armazenar em atributo de objeto
console.log("--------------")
const obj = {}
obj.falar = function () {return 'Opa'};
console.log(obj.falar());

//passar função com parametro
console.log("--------------")
function run(fun){
    fun()
}
run(function () {console.log("Executando...")});

//função pode retornar/conter uma função
console.log("--------------")
function soma(a, b){
    return function(c){
        console.log(a + b + c);
    }
}
soma(2, 3)(4);
const mais = soma(2, 3);
mais(4)