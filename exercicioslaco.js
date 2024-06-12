
const numeros="";
console.log("Digite 10 números entre 0 e 100: ");
process.stdin.on("data", function(data){
let numeros= data.toString().trim();
const splits= numeros.split(',');
console.log(splits)
let intervalo1=0;
let intervalo2=0;
let intervalo3=0;
let intervalo4=0;
    for (let i = 0; i < splits.length; i++) {
        let numero=splits[i]
if (numero>0 && numero <= 25) {
    intervalo1++;
}else if(numero>25 && numero <=50){
    intervalo2++;
}else if (numero>51 && numero <=75) {
    intervalo3++;
}else {
    intervalo4++;
}
}
console.log("De 0 a 25: " +intervalo1);
console.log("De 26 a 50: " +intervalo2);
console.log("De 51 a 75: " +intervalo3);
console.log("De 76 a 100: " +intervalo4);
})




//let numeros=[1,2,3]
//console.log(numeros)
//numeros.reverse()
//console.log(numeros)
