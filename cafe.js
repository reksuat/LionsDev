/*let resposta
resposta= process.stdout.write("Você gosta de café? ");
process.stdin.once("data", function (data){
    resposta=data.toString().trim();
    
    if(resposta==="sim"){
        console.log("café é bom");
    }
    else if(resposta==="não"){
        console.log("fresco");
    }
    else {
        console.log("erro!");
    }
})*/
let numero="";
numero=process.stdout.write("Digite um número: ");
process.stdin.once("data", function (data){
numero = Number(data.toString().trim());
let resultado = numero % 2 
if (resultado===0) {
    console.log("Este número é par!");
}else {
    console.log("Este número é impar!");
}
})

