const prompt = require("prompt-sync")({ sigint: true });
let digito = +prompt("Digite um número: ");
digito=parseFloat(digito);
function fatorar(numero) {
    let num=1;
    for (let i = numero; i > 1; i--) {
        num=i*num
    }
    return num
}   console.log(`${digito}! = ${fatorar(digito)}`)
