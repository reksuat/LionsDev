let notas=[]
console.log(typeof notas);

prova1=process.stdout.write("Digite a primeira nota: ");
process.stdin.once("data", function (data){
prova1 = Number(data.toString().trim());
notas.push(prova1)
prova2=process.stdout.write("Digite a segunda nota: ");
process.stdin.once("data", function (data){
    prova2= Number(data.toString().trim());
notas.push(prova2)
    prova3=process.stdout.write("Digite a terceira nota: ");
    process.stdin.once("data", function (data){
        prova3 = Number(data.toString().trim());
        notas.push(prova3)
        console.log(notas)
let media= ((notas[0]+notas[1]+notas[2])/3)
console.log("A média é: ", media )

if (notas[0]>notas[1] && notas[0]>notas[2]) {
    console.log("A maior nota foi da prova 1!");
}else if (notas[1]>notas[0] && notas[1]>notas[2]) {
    console.log("A maior nota foi da prova 2!");
}else if (notas[2]>notas[0] && notas[2]>notas[1]) {
    console.log("A maior nota foi da prova 3!");
}


})
})
})


//
//let pessoa=[]
//nome=process.stdout.write("Digite seu nome: ");
//process.stdin.once("data", function (data){
//nome = (data.toString().trim());
//pessoa.push(nome);
//idade=process.stdout.write("Digite sua idade: ");
//process.stdin.once("data", function (data){
//idade = (data.toString().trim());
//pessoa.push(idade);
//cnh=process.stdout.write("Digite sua CNH: ");
//process.stdin.once("data", function (data){
//cnh = (data.toString().trim());
//pessoa.push(cnh);
//console.log(pessoa)
//})
//})
//})