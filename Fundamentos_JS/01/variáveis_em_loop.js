const funcs = [];

for (let i = 0; i < 10; i++) { //closure, var não tem escopo de bloco
    funcs.push(function(){
        console.log(i);
    });
};

funcs[2]();
funcs[6]();
