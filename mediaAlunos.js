const prompt = require("prompt-sync")();

let nota = 0;
let somaNotas = 0;
let contadorNotas = 0;

while (nota >= 0) {
    let notas = +prompt("Digite a nota do aluno (ou bote um número negativo para encerrar): ");
    
    nota = notas - 0;

    if (nota >= 0) {
        somaNotas += nota;
        contadorNotas++;
    }
}

if (nota <= 0) {
    let media = somaNotas / contadorNotas
    console.log(`A media das notas é ${media}`);   
}
    else {
    console.log(`O aluno reprovou com ${media}`);       
}