// let curso = {};

// curso = {
//     nomeCurso: 'JavaScript',
//     local: 'Lions Startups',
//     ano: 2024,
//     professores: ['Edson', 'Eduardo', 'Jhonatan', 'João'],
//     materia: {
//         modulo1: 'introdução',
//         modulo2: 'variáveis',
//         modulo3: 'operadores',
//     },
//     verificaProfessor: function (professor) {
//        if(this.professores.includes(professor) == true) {
//            console.log('O professor ' + professor + ' professor leciona nessa instituição');
//        } else {
//            console.log('O professor ' + professor + ' não leciona nessa instituição');
//        }
//     }
// }

// // console.log(curso.materia.modulo3);
// curso.verificaProfessor("Edson");






//ex objeto

// process.stdout.write("Qual é o seu nome?  \n");

// let usuario = {
//     nome: "",
//     idade: "",
//     temCnh: "",
// };

// // Ler o que o usuário digitou
// process.stdin.on("data", function (data) {
//     if (!usuario.nome) {
//         usuario.nome = data.toString().trim();

//         // Pedir para o usuário digitar sua idade
//         process.stdout.write("Quantos anos você tem? \n");
//     } else if (!usuario.idade) {
//         usuario.idade = data.toString().trim();

//         // Exibir uma mensagem personalizada com as informações do usuário
//         process.stdout.write(
//             "Olá " + usuario.nome + ", você tem " + usuario.idade + " anos. \n"
//         );

//         // Perguntar se possui CNH
//         process.stdout.write("Você possui CNH? (Sim ou Não) \n");
//     } else {
//         // Ler a resposta
//         usuario.temCnh = data.toString().trim().toLowerCase();

//         // Exibir mensagem correspondente
//         if (usuario.temCnh == "sim") {
//             process.stdout.write(
//                 "Parabéns, " + usuario.nome + "! Você pode dirigir! \n"
//             );
//         } else {
//             process.stdout.write(
//                 "Infelizmente, " + usuario.nome + ", você não pode dirigir. \n"
//             );
//         }

//         console.log(usuario)
//         // Encerrar o programa
//         process.exit();
//     }
// });







//igual só q sem condicional
// process.stdout.write("Digite seu nome: \n");
// let usuario = {
//     nome: "",
//     idade: "",
//     temCnh: "",
// };

// process.stdin.once("data", function (data) {
//     usuario.nome = data.toString().trim();

//     process.stdout.write("Quantos anos você tem? \n");
//     process.stdin.once("data", function (data) {
//         usuario.idade = data.toString().trim();

//         process.stdout.write("Você possui CNH? (Sim ou Não) \n");
//         process.stdin.once("data", function (data) {
//             usuario.temCnh = data.toString().trim().toLowerCase();

//             // Exibir mensagem correspondente
//             if (usuario.temCnh == "sim") {
//                 process.stdout.write(
//                     "Parabéns, " + usuario.nome + "! Você pode dirigir! \n"
//                 );
//             } else {
//                 process.stdout.write(
//                     "Infelizmente, " + usuario.nome + ", você não pode dirigir. \n"
//                 );
//             }

//             process.exit();
//         })
//     })
// })


//ex 03

// Importa o módulo readline para ler a entrada do usuário
// const readline = require('readline');

// // Define o vetor de objetos com os usuários e suas habilidades
// var usuarios = [{
//     nome: "Douglas",
//     habilidades: ["Javascript", "ReactJS", "Redux"]
// },
// {
//     nome: "Elton",
//     habilidades: ["PHP", "Ruby on Rails", "Laravel"]
// }];

// // Cria uma interface readline para capturar a entrada do usuário
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Pergunta ao usuário para inserir o nome do usuário
// rl.question('Digite o nome do usuário: ', function(nome) {
//     let usuarioEncontrado = false;
//     for (let i = 0; i < usuarios.length; i++) {
//         if (usuarios[i].nome.toLowerCase() === nome.toLowerCase()) {
//             console.log(`O ${usuarios[i].nome} possui habilidades: ${usuarios[i].habilidades.join(', ')}`);
//             usuarioEncontrado = true;
//             break;
//         }
//     }

//     if (!usuarioEncontrado) {
//         console.log('Usuário não encontrado.');
//     }

//     // Fecha a interface readline
//     rl.close();
// });


