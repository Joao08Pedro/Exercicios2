const prompt = require("prompt-sync")();
const senha = (Math.floor(Math.random) * 10) + 1
let r = +prompt("Chute um número de 0 a 20: ")

while (r !== senha) {
    console.log("Errou! Tente novamente: ");
    break;
    
    if (r === senha){
        console.log("Acertou!");
        
    }
}