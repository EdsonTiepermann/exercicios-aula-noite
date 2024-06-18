//exercício 1

// console.log("digite o valor para A");
// process.stdin.once("data", function (data) {
//     let a = Number(data.toString().trim());

//     console.log("digite o valor para B");
//     process.stdin.once("data", function (data) {
//         let b = Number(data.toString().trim());

//         console.log("digite o valor para C");
//         process.stdin.once("data", function (data) {
//             let c = Number(data.toString().trim());

//             let result = a + b;

//             if (result > c) {
//                 console.log("A soma é maior que C");
//             } else if (result == c){
//                 console.log("A soma é igual a C");
//             } else {
//                 console.log("A soma é menor que C");
//             }
//             process.exit();
//         });
//     });
// });

//Exercício 2

// console.log("digite o valor para A");
// process.stdin.once("data", function (data) {
//     let a = Number(data.toString().trim());

//     console.log("digite o valor para B");
//     process.stdin.once("data", function (data) {
//         let b = Number(data.toString().trim());

//         let result = 0;
//         let valid = 0;
//         let msg = "";

//         if (a === b) {
//             result = a + b;
//             valid = result % 2;

//             if (valid === 0) {
//                 msg = "par";
//             } else {
//                 msg = "impar";
//             }

//             console.log("O calculo utilizado foi a soma, e o resultado é " + result + " e o resultado é " + msg);
//         } else {
//             result = a * b;
//             valid = result % 2;

//             if (valid === 0) {
//                 msg = "par";
//             } else {
//                 msg = "impar";
//             }
//             console.log("O calculo utilizado foi a multiplicação, e o resultado é " + result + " e o resultado é " + msg);
//         }
//         process.exit();

//     });
// });




// exercicio 3

// let countVoto = 0;
// let votos = [];

// console.log("Por favor, insira o número do seu voto (1-4 para os candidatos, 5 para voto nulo, 6 para voto em branco):");

// process.stdin.on("data", function (data) {
//     let voto = Number(data.toString().trim());

//     if (countVoto < 10) {
//         if ([1, 2, 3, 4, 5, 6].includes(voto)) {
//             votos.push(voto);
//             countVoto++;
//         } else {
//             console.log("Voto inválido! Por favor, insira um número entre 1 e 6.");
//         }

//         if (countVoto < 10) {
//             console.log("Digite seu próximo voto:");
//         } else {
//             process.stdin.pause();  // Para de receber mais dados após 10 votos
//             contarVotos();
//         }
//     }
// });

// function contarVotos() {
//     let totalVotos = {
//         candidato1: 0,
//         candidato2: 0,
//         candidato3: 0,
//         candidato4: 0,
//         nulo: 0,
//         branco: 0
//     };

//     for (let voto of votos) {
//         switch (voto) {
//             case 1:
//                 totalVotos.candidato1++;
//                 break;
//             case 2:
//                 totalVotos.candidato2++;
//                 break;
//             case 3:
//                 totalVotos.candidato3++;
//                 break;
//             case 4:
//                 totalVotos.candidato4++;
//                 break;
//             case 5:
//                 totalVotos.nulo++;
//                 break;
//             case 6:
//                 totalVotos.branco++;
//                 break;
//         }
//     }

//     console.log("Resultado da votação:");
//     console.log(`Total de votos para o Candidato 1: ${totalVotos.candidato1}`);
//     console.log(`Total de votos para o Candidato 2: ${totalVotos.candidato2}`);
//     console.log(`Total de votos para o Candidato 3: ${totalVotos.candidato3}`);
//     console.log(`Total de votos para o Candidato 4: ${totalVotos.candidato4}`);
//     console.log(`Total de votos nulos: ${totalVotos.nulo}`);
//     console.log(`Total de votos em branco: ${totalVotos.branco}`);
// }




// exercicio 4

// process.stdout.write("Digite seu nome: \n");
// let usuario = {
//     nome: "",
//     idade: "",
//     curso: "",
// };

// process.stdin.once("data", function (data) {
//     usuario.nome = data.toString().trim();

//     process.stdout.write("Quantos anos você tem? \n");
//     process.stdin.once("data", function (data) {
//         usuario.idade = data.toString().trim();

//         process.stdout.write("Qual curso você frequenta? \n");
//         process.stdin.once("data", function (data) {
//             usuario.curso = data.toString().trim().toLowerCase();

//             //interpolação, lembrar de falar na aula.
//             console.log(`${usuario.nome} tem ${usuario.idade} anos e frequenta o curso de ${usuario.curso}.`);

//             // Percorrer o objeto e exibir suas propriedades
//             for (let key in usuario) {
//                 console.log(`${key}: ${usuario[key]}`);
//             }

//             process.exit();
//         });
//     });
// });


let notas = []
let num = 0
let contador = 0
let soma = 0;
console.log("Digite sua nota: ");
process.stdin.on("data", function (data){
    num = parseFloat(data.toString().trim());

    if(contador < 4){
        notas.push(num)
        contador++
    }
    if(contador < 4){
        console.log("Digite o próximo número");
        
    }else {
        for(let i = 0; i < notas.length; i++){
            soma = notas[i] + soma;
            // let soma += notas[i]; 
        }
        let media = (soma/4);
        // console.log(typeof(media))
        console.log("A média é", media);
        process.stdin.pause();
    }
})