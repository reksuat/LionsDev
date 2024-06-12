// let numero=0;
// console.log("Digite um número: ");
// process.stdin.once("data",function(data){
//     numero=data.toString().trim();
//     console.log(numero+1);
//     console.log(numero-1);
// })

// let notas=[];
// let contador=0;
// let media=0;
// let soma=0
// console.log("Digite seu nome: ");
// process.stdin.once("data",function(data) {
//     let nome=data.toString().trim()


// console.log("Insira 4 notas: ");
// process.stdin.on("data",function(data) {
//     let numero=Number(data.toString().trim())
//     if (contador<4) {
//         notas.push(numero)
//         contador++
//     }
//     if (contador<4) {
//         console.log("Insira mais um número")
//     }else{
//         console.log(notas)
//         for (let i = 0; i < notas.length; i++) {
//             soma+=notas[i]
            
//         }
//         media=soma/notas.length
//         if (media>7) {
//             console.log("Você foi aprovado",nome)
//         }else{
//             console.log("Você foi reprovado",nome)
//         }
//         process.stdin.pause
//     }
// })
// }) 
let imc=0
console.log("Seu peso: ");
process.stdin.once("data",function(data) {
    let peso=data.toString().trim()    

    console.log("Sua altura: ");
process.stdin.once("data",function(data) {
    let altura=data.toString().trim()    
    imc= peso/altura/altura
console.log(imc)
if (imc<18.5) {
    console.log("Abaixo do peso! ")
}else if (imc>18.6 && imc<24.9) {
    console.log("Peso ideal, Parabens!")
}else if (imc>25 && imc<29.9) {
    console.log("Levemente acima do peso!")
}else if (imc>30 && imc<34.9) {
    console.log("Obesidade grau I!")
}else if (imc>35 && imc<39.9) {
    console.log("Obesidade grau II(severa)")
}else{
    console.log("Obesidade grau III(mórbida)")
}
})
})