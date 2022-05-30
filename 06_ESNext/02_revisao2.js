const soma = (a, b) => a + b;
console.log(soma(3, 4));

// Arrow function (this)
console.log("-----------");
const lexico1 = () => console.log(this === exports);
const lexico2 = lexico1.bind({});
lexico1();
lexico2();

// Parametro DEFAULT
console.log("-----------");
function log(text = 'Node') {
    console.log(text);
}

log();
log("Sou mais forte!");