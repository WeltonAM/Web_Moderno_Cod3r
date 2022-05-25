var a;
console.log('a =', a);
a = 2;
console.log('a =', a);

console.log('----------');
function teste(){
    console.log('a =', a);
    var a = 2;
    console.log('a =', a);
}

teste();

console.log('----------');
console.log('b =', b); // erro
let b = 2;
console.log('b =', b);