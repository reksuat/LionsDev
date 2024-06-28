const prompt = require("prompt-sync")({ sigint: true });
let digito = +prompt("Digite um número: ");
digito=parseFloat(digito);
let num=1;
    for (let i = digito; i > 1; i--) {
        num=i*num
    }
    console.log(`${digito}! = ${num}`)
