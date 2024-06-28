const prompt = require("prompt-sync")({ sigint: true });
let historia = prompt("Conte uma historia!! ");
let palavras= historia.trim().split(/\s+/);
let numPalavras=palavras.length
console.log(`A história tem ${numPalavras} palavras`)
let contarPalavra={}//entra vazio para armazenar a quantidade
for (let i = 0; i < palavras.length; i++) {
    let palavra=palavras[i]
    contarPalavra[palavra]=(contarPalavra[palavra] || 0) +1 
    
}
for (let palavra in contarPalavra) {//verifica se pertence ao objeto 
    console.log(`${palavra}: ${contarPalavra[palavra]}`);
}
