// //potencia
// let resultado;
// resultado=Math.pow(5,3);
// console.log(resultado);
// //raiz
// resultado=Math.sqrt(72,3);
// console.log(resultado);
// //arredonda pra cima
// resultado=Math.ceil(resultado);
// console.log(resultado);
// //arredonda para baixo
// resultado=Math.floor(resultado);
// console.log(resultado);
// //arredonda pro mais proximo
// resultado=6.4
// resultado=Math.round(resultado);
// console.log(resultado);

// //retorna numero de PI
// resultado=Math.PI;
// //toFixed é o numero de casas depois da ","
// console.log(resultado.toFixed(4));

// //random numero aleatorio numeros quebrados
// let resultado1
// resultado1=Math.random().toFixed(4);
// console.log(resultado1)
// //numero aleatorio de 0 a 10
// let resultado2=Math.floor(Math.random()*(10-0))+0
// console.log(resultado2)

// const nomes=['luiz','maria','helena'];
// const indiceArray= Math.floor(Math.random() *nomes.length);
// const randomElement= nomes[indiceArray];
// console.log(randomElement)

let r1=1;
let r2=2;
let r3=3;
let r4=[38,61,44,16,10,68]
console.log(...r4,r1,r2,r3)
for (let i = 0; i < r4.length; i++) {
    resultado=Math.min(r4[i],r1,r2,r3)
}console.log(resultado)
resultado=Math.max(r1,r2,r3);
console.log(resultado)