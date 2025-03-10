const prompt = require("prompt-sync")();

const obj = 100
let tAcumulado = 0

while (tAcumulado <= 100) {
    let quantidade = +prompt("Quanto você quer economizar? ")
    
    if (quantidade <= 0) {
        console.log("Porfavor insira um valor maior que 0");
    }
    tAcumulado += quantidade

    console.log(`Você acumulou ${tAcumulado}`);
    
    if (tAcumulado > obj) {
        console.log(`Você atingiu o objetivo!! Com ${tAcumulado}`);
        break;
    }
}