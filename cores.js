/*let coresFavoritas= ['azul','preto','verde']
let corEscolhida=""
corEscolhida=process.stdout.write("Qual a sua cor favorita? ");
process.stdin.once("data", function (data) {
corEscolhida = data.toString().trim();

if (coresFavoritas.includes(corEscolhida)) {
    console.log("Sua cor favorita está entre as mais escolhidas! ")
} else{
    console.log("Sua cor favorita é diferente das outras, iremos adicionar! ")
    coresFavoritas.push(corEscolhida)
    console.log("Cor adicionada! " +coresFavoritas)
}
})*/
/*
console.log("Digite uma frase: ");
process.stdin.on("data", function (data) {
let frase = data.toString().trim();
let caracteres= frase.length;
    if (caracteres % 2 == 0) {
        console.log("O número é par! E possui: " + caracteres )
    }else {
        console.log("O número é impar! E possui: " + caracteres)
    }
})
*/

let lista= [ 1,56,23,43,12,0,4,6,7,9];
let numero=0;
console.log("Digite um número: ");
process.stdin.on("data", function(data){
    let numero= Number(data.toString().trim());
    if (lista.includes(numero)) {
        console.log("Esse número está na lista! ");
    }else{
        console.log("Esse número não está na lista");
    }
})