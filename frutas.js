const prompt = require("prompt-sync")();
let frutas = 50

while (frutas > 0) {
    let comer = +prompt(`Você tem ${frutas} na cesta, quantas você quer comer? `)

    if (comer > frutas) {
        console.log("Você não pode comer mais frutas do que tem!! ");
    }
    else if (comer <= 0) {
        console.log("Você não pode comer frutas inexistentes... ");
    }
    else {
        frutas -= comer
        console.log(`Você tem ${comer} e agora restam ${frutas} na cesta`);
        
    }
}

console.log("Você comeu todas as frutas!!");
