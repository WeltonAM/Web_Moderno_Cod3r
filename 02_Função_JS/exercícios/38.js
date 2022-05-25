function pares(a = 0, b = 100){
    let c;
    if(a > b){
        c = a;
        a = b;
        b = c
    }

    for(let i = a; i < b; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }
    }
}


pares(19, 3);