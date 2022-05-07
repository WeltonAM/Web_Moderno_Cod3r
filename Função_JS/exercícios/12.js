function fatorial(num){
    if(num == 0){
        return num = 1;
    } else {
        return num * fatorial(num - 1);
    }
}

console.log(fatorial(0));
console.log(fatorial(4));
console.log(fatorial(6));
console.log(fatorial(10));