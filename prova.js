// console.log("Nome: ");
// process.stdin.once("data",function(data){
//     let nome=data.toString().trim()

//     console.log("Meu nome é",nome)
// })

// let numero= 6;
// let x
// if (numero %2==0) {
//     x= true
// }else{
//     x= false
// }
// if(x){
//     console.log("par")
//     }else{
//         console.log("impar")
//     }

// let idade=18;
// let mensagem
// if (idade>=16) {
//     mensagem= "Você pode votar."
// }else{
//     mensagem= "Você não pode votar."
// }
// console.log(mensagem);

// let idade=21;
// let mensagem
// if (idade>=18) {
//     mensagem= "Você pode dirigir."
// }else{
//     mensagem= "Você não pode dirigir."
// }
// console.log(mensagem);

// let numeros = [1,2,3,4,5]
// let soma=0;
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
//     if (numeros[i] %2 != 0) {
//         soma += numeros[i]
//     }
// }
// console.log(soma)
let media=0
let soma=0
let nota=0
let notaMaior=[0]
let notaMenor=[0]
let notas=[7.5,8.0,6.0,9.5,5.0,8.5,7.0,10.0,6.5,9.0]
notas.push(8.0)
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
    soma+=notas[i]
    media=soma/notas.length
    nota=notas[i]
}
console.log("A média foi: ",media);
if (nota>=7.0) {
    console.log("Passou!")
}else{
    console.log("Reprovou!")
}
for (let i = 0; i < notas.length; i++) {
    if (notas[i]> notaMaior) {
        notaMaior=notas[i]
    }else {
        notaMenor=notas[i]
    }
    
}   console.log("maior nota", notaMaior)
console.log("nota menor",notaMenor)