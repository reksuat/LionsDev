let idade="";
process.stdout.write("Digite sua idade: ");
process.stdin.once("data", function(data){
    idade=data.toString().trim();
if(idade>=18){
    console.log("Você é maior de idade!");
}
else if(idade<=18){
    console.log("Você é menor de idade!");
}
})