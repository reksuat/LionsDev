const prompt = require ("prompt-sync")({sigint: true});
let quantasN= +prompt("Digite a quantidade de notas: ");
function contar(quantidade) {
    return quantidade;
}
console.log(contar(quantasN))
let nota=[]
console.log("digite as notas ")
process.stdin.on("data",function(data){
    notinha=Number(data);
    nota.push(notinha);
let calcMS= media(nota)
if (quantasN==nota.length) {
    console.log("soma das notas: ",calcMS.soma );
    console.log("notas: ", nota);
    console.log("a media daas notas: ", calcMS.media);
    process.exit

    }else{
        console.log("continue");
    }

    function media(notas) {
        let soma=0;
        for (let i = 0; i < notas.length; i++) {
            soma+=notas[i]
        }
        media= soma/contar(quantasN)
        return{
            soma:soma,
            media:media
        }
    }
})