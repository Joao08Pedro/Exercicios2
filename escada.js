const prompt = require("prompt-sync")();
const dg = 30;
const escada = +prompt("Qual o tamanho da escada?")

const n = escada / dg

if (escada > dg) {
    console.log(`Vai faltar ${n} degraus para alcançar o topo da escada`);   
}
else {
    console.log("Erro, número inválido (mínimo 2 * 30)");
}