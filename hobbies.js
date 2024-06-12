let registros=[]
let hobbies=""
process.stdout.write("Insira um hobby ou digite 'sair' para encerrar: ");
process.stdin.on("data", function (data) {
let hobbies = data.toString().trim();


    if (hobbies==='sair') {
        registros.forEach(function(hobbies, indice){
            console.log(indice+1 + ". " + hobbies);
            
        }) 
        console.log("Aqui estão seus hobbies");
        process.exit();
    } else{
            registros.push(hobbies);
            console.log("Adicionado com sucesso!");
        }

})
