const prompt = require("prompt-sync")();
const ml = 5;
const garrafa = +prompt("Qual o tamanho da garrafa em ml?")

const gc = garrafa / ml;

if (garrafa >= ml) {
    console.log(`Vai faltar ${gc}ML para a garrafa ficar cheia.`); 
}

else {
    console.log("a garrafa EXPLODIU");
}
