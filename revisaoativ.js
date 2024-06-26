// let arrayNum=[];
// let par=0;
// let impar=0;
// let maior=0;
// let menor=0;


// for (let i = 0; i < 10; i++) {
//     let aleatorio=Math.floor(Math.random()*(100-0))
//     arrayNum.push(aleatorio);
//     if (arrayNum.length==10) {
//         console.log(arrayNum)
//     }
//     if(arrayNum[i] > maior){
//         maior= arrayNum[i]
//     }if (arrayNum[i]< menor) {
//         menor=arrayNum[i]
//     }
  
// }
// for (let j = 0; j < arrayNum.length; j++) {
//     let numero = arrayNum[j] % 2 == 0;
//     if (numero) {
//         par++
//     } else {
//         impar++
//     }
// }

//  console.log("a",par)
//  console.log("b",impar)
//  console.log('seu maior numero é',maior);
//  console.log("seu menor número é",menor);



// let endereco = {
// cidade: 'Ponta Grossa',
// estado: "PR",
// bairro: "Oficinas",
// rua: "moncorvo",
// numero: 1521
// };

//     console.log(`O usuário mora em ${endereco.cidade}/${endereco.estado}, no bairro ${endereco.bairro}, na ${endereco.rua}, número ${endereco.numero}`);


let skills = ["Laravel","Javascript","Nodejs","Livewire"];
let habilidades 

    if (skills.includes("Javascript")) {
        habilidades=true
    }else{
        habilidades=false
    }if (habilidades) {
        console.log("Tem ")
    }else{
        console.log("não tem")
    }


// if (numero %2==0) {
//     x= true
// }else{
//     x= false
// }
// if(x){
//     console.log("par")
//     }else{
//         console.log("impar")
//     }


// let usuario={
//     nome: "Douglas",
//     habilidades: ["Javascript","ReactJS","Redux"]
// }
// let usuario2={
//     nome:"Elton",
//     habilidades: ["Php", "Ruby on Rails", "Laravel"]
// };
// console.log("Douglas ou Elton: ");
// process.stdin.on("data", function(data){
//     let nomes=data.toString().trim()
//     switch (nomes) {
//         case "Douglas":
//             console.log(`O ${usuario.nome} possui habilidades ${usuario.habilidades}`)
//             break;
//             case "Elton":
//                 console.log(`O ${usuario2.nome} possui habilidades ${usuario2.habilidades}`)
//             break;
    
//         default:
//             break;
//     }
// })