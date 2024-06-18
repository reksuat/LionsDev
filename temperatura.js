let f = 0;
let c = 0;
let k = 0;
console.log("Digite uma temperatura");
process.stdin.once("data",function(data){
    let temperatura=Number(data.toString().trim());
    console.log("Digite uma escala (Celcius, Kelvin, Fahrenheit)");
    process.stdin.once("data",function(data){
        let escala=data.toString().trim();
if (escala=="c") {
    c=temperatura;
     f=temperatura * 1.8 + 32;
    k= temperatura + 273;

    console.log(`escala de Celcius ${c}C° para Fahrenheit ${f}F°, e para Kelvin ${k}K`);
} if (escala=="f") {
    f=temperatura;
    c=(temperatura - 32) / 1.8;
    k=(temperatura-32) * 5 / 9 + 273; 
    console.log(`escala de Fahrenheit ${f}F° para Celcius ${c}C°, e para Kelvin ${k}K`);
} if (escala=="k") {
    k=temperatura;
    c=temperatura - 273;
    f=(temperatura - 273) * 1.8 + 32;
    console.log(`escala de Kelvin ${k}K para Fahrenheit ${f}F°, e para Celcius ${c}C°`);
} else{
    console.log("Não é nenhuma escala ")
    process.exit()
}
    })
}) 