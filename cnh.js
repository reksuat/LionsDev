let idade="";
let resposta="";
process.stdout.write("Digite sua idade: ");
process.stdin.once("data", function (data) {
idade = data.toString().trim();
const resultado= 2024-idade;
console.log("Você nasceu no ano de",+resultado);

resposta=  process.stdout.write("Você possui CNH? ");
process.stdin.once("data", function (data) {
resposta = data.toString().trim();
if(resposta ==="sim"){
    console.log("Você possui CNH!")
} else if(resposta ==="não"){
    console.log("Você não possui CNH!");
}
})
})
