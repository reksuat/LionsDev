let somaPar = 0;
let somaImpar = 0;
let numerosImpar = 0;
let numerosPar = 0;
let mediaAritmeticaImpar = 0;
let mediaAritmeticaPar = 0;

for (let i = 0; i <= 999; i++) {
    somaImpar= i+i; 

if (i % 2 !== 0) { 
    somaImpar= somaImpar + i; //somaImpar += i;
    numerosImpar= numerosImpar + 1; //numerosImpar++;
    //console.log("Média Aritmética dos Impares: ",mediaAritmeticaImpar);
    } else {
    somaPar= somaPar + i
    numerosPar=numerosPar + 1;
    //console.log("Média dos Pares: ",mediaAritmeticaPar);
    }
}

    mediaAritmeticaImpar = somaImpar/numerosImpar;
    mediaAritmeticaPar = somaPar/numerosPar;
    
console.log("Soma Ímpares: ",somaImpar);
console.log("Soma Pares: ",somaPar);
console.log("Total números Pares: ",numerosPar);
console.log("Total números Ímpares: ",numerosImpar);

if (mediaAritmeticaPar>mediaAritmeticaImpar) {
    console.log("A média aritmética do par é maior! ", mediaAritmeticaPar)
}else{
    console.log("A média aritmética do impar é maior! ", mediaAritmeticaImpar)
}