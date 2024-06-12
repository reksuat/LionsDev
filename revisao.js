//let numeros= [1,2,3,4,5,6,7,8,9,10];
//console.log(numeros);
//numeros.push(11);
//console.log(numeros);
//let x=numeros.pop();
//x=numeros.shift();
//console.log(numeros);
//console.log(x);
//numeros.unshift(1);
//console.log(numeros);
//console.log(numeros.includes(6));
//console.log(numeros.includes(20));
//let y= numeros.splice(4,3,'cinco','seis','sete');
//console.log(numeros);
//console.log(y);
//console.log(numeros.length);
//for (let index = 0; index < numeros.length; index++) {
//    console.log(numeros[index])
//    
//}
//let j=0;
//while (j< numeros.length) {
//    console.log(numeros[j])
//    j++;
//}
//do {
//    console.log(numeros[j])
//    j++;
//} while (j<numeros.length);
//numeros.forEach(element => {
//    console.log(element);  
//});

//let numeros= [];
//console.log("Digite 15 números entre 0 a 100: ")
//process.stdin.on("data",function(data){
//    let numero= Number(data.toString().trim())
//    if (numeros.length>14) {
//        console.log("Aqui estão seus números por for: ");
//    
//    for (let i = 0; i < numeros.length; i++) {
//        console.log(numeros[i]);
//    }
//    console.log("por forEach: ")
//    numeros.forEach(element => {
//        console.log(element)
//    });
//    console.log("Por while: ")
//    let x=0;
//    while (x<numeros.length) {
//        console.log(numeros[x])
//        x++
//    }
//    console.log("Por do while: ")
//    let y=0;
//    do {
//        console.log(numeros[y])
//        y++
//    } while (y<numeros.length);
//    process.exit();
//    }else{
//        numeros.push(numero);
//        console.log("Insira mais um número: ")
//    }
//});


let par=[]; //array para os pares
let impar=[];//array para os impares
let todosNum=[];//array conjunto dos numeros
console.log("Digite 10 números: ");//mostrar mensage numeros
process.stdin.on("data",function(data){//guarda informacao para usar ao executar codigo
    let numero=data.toString().trim()//passa oq tem dentro do data para o numero
    todosNum.push(numero)//coloca dentro do todosNum o numero
    if (todosNum.length>=10) {//define limite de numeros q o usuario poe
        for (let i = 0; i < todosNum.length; i++) {//repetição
            let numero=todosNum[i]//passa valor da posição pro numero
            if (numero%2==0) {//numero ser par
                par.push(numero)//passa numeros pro par que sejam Par
            }else{//caso não sejam pares
                impar.push(numero)//passa numeros pro impar que sejam Impar
            }
        }
        console.log("------Números pares-----")
        for (let i = 0; i < par.length; i++) {//repete o array par
            let numero = par[i];//passa valor da posição pro numero
            console.log(numero)    //mostra os pares(numero)
            
        }
        console.log("-----Números impares-----")
        for (let i = 0; i < impar.length; i++) {
            let numero = impar[i];
            console.log(numero)    
        }
        process.exit()

    }
})