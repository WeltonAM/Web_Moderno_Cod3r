function entre(num, min, max, inclu = false) {
    if(num >= min && num <= max){
        return inclu = true
    } else {
        return inclu
    }
}

console.log(entre(5, 6, 7));
console.log(entre(5, 4, 7));