// const prompt = require("prompt-sync")({ sigint: true });
// let Base=[]
// let Expoente=[]
// let resultado;
// resultado=Number(resultado)
// let base= prompt("Digite um número (base): ");
// base=Number(base)
// Base.push(base);
// let expoente= prompt("Digite um número (expoente): ");
// expoente=Number(expoente);
// Expoente.push(expoente);
// for (let i = 0; i < Base.length; i++) {
//     for (let j = 0; j < Expoente.length; j++) {
        
    
//     if (expoente>0) {
//         resultado= Base[i]+=Expoente[j];
//         console.log("o resultado é ",resultado)
//     }else if (expoente=0) {
//         console.log("O valor é 1")
//     }
// }
// }

const prompt = require("prompt-sync")({ sigint: true });
let base = +prompt("base : ");
let expoente = +prompt("expoente : ");
let resultado=0;
let base_aux= base

for (let i = 0; i < expoente.length; i++) {
    for (let j = 0; j < base.length; j++) {
        resultado+=base_aux
        
    }
    base_aux=resultado
    
}
console.log(resultado)