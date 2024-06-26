
    const prompt = require("prompt-sync")({ sigint: true });

    let consulta = [];

    while (true) {
    console.log(`
        //     === Menu de consultas Médicas ===
        //     1. Adicionar uma nova consulta
        //     2. Listar todas as consultas
        //     3. Atualizar uma consulta existente
        //     4. Cancelar uma consulta
        //     0. Sair
        //     `);

    let opcao = prompt("Escolha uma opção: ");

    if (opcao === "1") {
        let paciente = prompt("Nome do paciente: ");
        let medico = prompt("Nome do médico: ");
        let data = prompt("Data: ");
        let hora = prompt("Hora: ");

        consulta.push({ paciente, medico, data, hora });
        console.log("Consulta marcada!");
        consulta.forEach((consulta, index) => {
            console.log(
            `${index + 1}. ${consulta.paciente} - ${consulta.medico} - ${consulta.data} - ${consulta.hora}
            `);
        });
    } else if (opcao === "2") {
        if (consulta.length === 0) {
        console.log("Nenhuma consulta agendada.");
        break;
        } else {
        consulta.forEach((consulta, index) => {
            console.log(
            `${index + 1}. ${consulta.paciente} - ${consulta.medico} - ${consulta.data} - ${consulta.hora}
            `);
        });
        }
    }else if (opcao === "3") {
        if(consulta.length===0){
            console.log("Nenhuma consulta para alterar.");
            break;
        } else { 
            let indice = prompt("Digite o indice da consulta que deseja mudar: ");
            indice=  Number(indice)
            if (indice>=0 && indice < consulta.length) {
                let paciente = prompt("Novo nome do paciente: ");
                let medico = prompt ("Nome do Médico: ");
                let data = prompt("Data: ");
                let hora = prompt("Hora: ");

                // consulta[indice].paciente=pacienteN;
                // consulta[indice].medico=medicoN;
                // consulta[indice].data=dataN;
                // consulta[indice].paciente=pacienteN;
                consulta[indice]={ paciente, medico, data, hora };
                console.log("Consulta atualizada! ");
                consulta.forEach((consulta, index) => {
                    console.log(
                    `${index + 1}. ${consulta.paciente} - ${consulta.medico} - ${consulta.data} - ${consulta.hora}
                    `);
                });
            }
                }
        }else if (opcao === "4") {
            let cancelar = prompt("Digite a consulta que deseja cancelar: ");
            cancelar= parseInt(cancelar);
            
            if (cancelar >= 1 || cancelar < consulta.length){
                // consulta[cancelar]={}
                consulta.splice(cancelar -1,1);
                console.log("Consulta cancelada! ")
                consulta.forEach((consulta, index) => {
                    console.log(
                    `${index + 1}. ${consulta.paciente} - ${consulta.medico} - ${consulta.data} - ${consulta.hora}
                    `);
                });
            }
        }
    
    else if (opcao === "0") {
        console.log("Saindo do sistema. Até logo!");
        break;
    } else {
        console.log("Opção inválida. Tente novamente.");
        break;
    }
    }