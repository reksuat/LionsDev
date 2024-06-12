let par=[]; //array para os pares
let impar=[];//array para os impares
let todosNum=[];//array conjunto dos numeros
let somaPar=0;
let somaImpar=0;
console.log("Digite 10 números: ");//mostrar mensage numeros
process.stdin.on("data",function(data){//guarda informacao para usar ao executar codigo
    let numero=data.toString().trim()//passa oq tem dentro do data para o numero
    todosNum.push(numero)//coloca dentro do todosNum o numero
    if (todosNum.length>=5) {//define limite de numeros q o usuario poe
        for (let i = 0; i < todosNum.length; i++) {//repetição
            let numero=todosNum[i]//passa valor da posição pro numero
            somaPar=i+i
            somaImpar=i+i
            if (numero%2==0) {//numero ser par
                somaPar=somaPar+i
                par.push(numero)//passa numeros pro par que sejam Par
            }else{//caso não sejam pares
                impar.push(numero)//passa numeros pro impar que sejam Impar
                somaImpar=somaImpar+i;
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
        console.log("SOMA: ",somaPar)
        console.log("SOMA IMPAR: ",somaImpar)


    }
    })