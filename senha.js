const prompt = require("prompt-sync")();
const sCorreta = Math.floor(Math.random() * 21)

let senha = +prompt("Chute um número de 0 a 20: ")

while (senha !== sCorreta) {
    console.log("Errou! Tente novamente."); 
    senha = +prompt("Chute um número de 0 a 20: ")
}

console.log("Acertou!!");