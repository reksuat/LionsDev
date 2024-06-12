let aleatorio = Math.random()
let numeroAle= Math.floor(aleatorio*21);
let contador=1;
console.log("Digite um número de 0 a 20: ");
process.stdin.on("data",function(data){
    let num=Number(data.toString().trim());
    if (num >20) {
        console.log("Número de 0 a 20, tente novamente!")
    }
    else{
    if(contador<=3)
        {
    if (numeroAle==num) {
        console.log("Você acertou!!")
        process.exit()
    }else if(numeroAle>num){
        contador++
        console.log("É um número maior, digite novamente.")
    }else if(numeroAle<num){
        contador++
        console.log("É um número menor, digite novamente.")
    }}else if(contador>3){
    console.log("Você perdeu! Era o número",numeroAle)
    process.exit()
}
    }
})