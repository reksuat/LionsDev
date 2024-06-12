let nome="";
let idade="";
let cidade="";

console.log ("Qual seu nome?")
process.stdin.once("data", function(data) {
    nome = data.toString().trim();

    console.log ("Qual sua idade?"); 
    process.stdin.once("data", function(data) {
        idade = data.toString();

        console.log ("Qual sua cidade?");

})})

