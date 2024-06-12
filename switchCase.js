// let notas=[9,7,6,8,5];
// let media=0;
// let soma=0;
// let maiorNota=notas[0];
// let menorNota=notas[0];
// for (let i = 0; i < notas.length; i++) {
//     soma+=notas[i];
//     media=soma/notas.length
// }
// switch (true) {
//     case (media>=6):
//         console.log("aprovado",media)
//         break;

//     default:
//         console.log("reprovou", media)
//         break;
// }
// for (let i = 0; i < notas.length; i++) {
//     if(maiorNota<notas[i]){
//     maiorNota=notas[i]
//     }else{
//         menorNota=notas[i]

//     }
// }console.log(maiorNota)
// console.log(menorNota)

// console.log("Digite um código de 1 a 4: ");
// process.stdin.once("data",function(data){
//     let codigo=parseFloat(data.toString().trim());

//     switch (codigo) {
//         case (1):
//             console.log("Alimento não-perecível")
//             break;
//         case (2):
//             console.log("Alimento perecível")
//             break;
//         case (3):
//             console.log("Vestuário")
//             break;
//         case (4):
//             console.log("Limpeza")
//             break;
        
//         default:
//             break;
//     }
// })

// console.log("Diga um mês do ano ");
// process.stdin.on("data",function(data){
//     let estacao=data.toString().trim();
//     switch (estacao) {
//         case ("março"):
//             case"abril":
//             case"maio":
//             console.log("Outono: duração de março a maio")
//             break;
//             case ("junho"):
//                 case"julho":
//                 case"agosto":
//                 console.log("Inverno: duração de junho a agosto")
//                 break;
//                 case ("setembro"):
//                     case"outubro":
//                     case"novembro":
//                     console.log("Primavera: duração de setembro a novembro")
//                     break;
//                     case ("dezembro"):
//                         case"janeiro":
//                         case"fevereiro":
//             console.log("verão: duração de dezembro a fevereiro")
//             break;
    
            
    
//         default:
//             break;
//     }
// })


console.log("Digite um mês");
process.stdin.on("data",function(data){
    let mes=data.toString().trim();
    switch (mes) {
        case "fevereiro":
            console.log("28 dias!")
            break;
        case "abril":
            case "junho":
                case "setembro":
                    case "novembro":
                        console.log("30 dias")
            break;
        case "janeiro":
            case "março":
                case "maio":
                    case "julho":
                        case "agosto":
                            case "outubro":
                                case "dezembro":
                                    console.log("31 dias")
                                    break;
                                    default:
    }
})