/*const aluno = [
    {nome: 'igor', idade: 17, contando: '(42 99943-4515)'},
    {nome: 'Alexandre', idade: 24, contando: '(42 99943-4515)'},
    {nome: 'Alberto', idade: 25, contando: '(42 99943-4515)'},
    {nome: 'Gabriel', idade: 19, contando: '(42 99943-4515)'}
]
aluno.forEach(function(item, index, array) {
    if (item.idade > 18) {
        console.log("É maior de idade: " + item.nome);
}
    else {
        console.log("É menor de idade: " + item.nome);
}
});*/




/*tabuada=process.stdout.write("A tabuada de: ");
process.stdin.on("data", function (data) {
    let tabuada = data.toString().trim();

    for (let i = 0; i < 10; i++) {
        let resultado= tabuada*i;
        if (tabuada*i) {
            console.log(tabuada+ "x" + i + "=" + resultado)
        }
        
    }
})*/

for (let i = 100; i < 200; i++) {
    if (i %2 !== 0) {
        console.log("impares: ", +i)  
    } 
    
}