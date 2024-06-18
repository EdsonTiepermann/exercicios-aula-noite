// // Exemplo
// let notas = []
// let num = 0
// let contador = 0
// let soma = 0;
// console.log("Digite sua nota: ");
// process.stdin.on("data", function (data) {
//     num = parseFloat(data.toString().trim());

//     if (contador < 4) {
//         notas.push(num)
//         contador++
//     }
//     if (contador < 4) {
//         console.log("Digite o próximo número");

//     } else {
//         for (let i = 0; i < notas.length; i++) {
//             soma = notas[i] + soma;
//             // let soma += notas[i]; 
//         }
//         let media = (soma / 4);
//         // console.log(typeof(media))
//         console.log("A média é", media);
//         process.stdin.pause();

//         switch ($prod) {
//             case 1:
//                 console.log(media + ": Aprovado");
//                 break;
//             case 2:
//                 console.log(media + ": Recuperação");
//                 break;
//             default:
//                 console.log(media + ": Reprovado");
//                 break;
//         }
//     }
// })


// Ex 02
// let mes = "";

// console.log("Digite o mês: ");
// process.stdin.on("data", function (data) {
//     mes = data.toString().toLowerCase().trim();


//     switch (mes) {
//         case ("marco"):
//         case ("abril"):
//         case ("maio"):
//         case ("junho"):
//             console.log("outono");
//             break;
//         case ("julho"):
//         case ("agosto"):
//         case ("setembro"):
//             console.log("inverno");
//             break;
//         case ("outubro"):
//         case ("novembro"):
//         case ("dezembro"):
//             console.log("primaveira");
//             break;
//         case ("janeiro"):
//         case ("fevereiro"):
//             console.log("Verão");
//             break;
//         default:
//             console.log(media + ": Reprovado");
//             break;
//     }

//     process.exit()
// })





// exercicio 04

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




// let notas = [7.5, 8.0, 6.0, 9.5, 5.0];

// // console.log(notas.length);

// for (let i = 0; i < notas.length; i++) {

// console.log(notas[]);

// }

let mes = 0;
console.log("Digite o mes: ");
process.stdin.on("data", function (data) {
    mes = Number(data.toString().trim());

    console.log(mes);

    switch (mes) {
        case 2:
            console.log(28 + " dias");
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            console.log(30 + " dias");
            break;
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            console.log(31 + " dias");

        default:
            console.log("Seu vacilão digite certo");
            break;
    }
    
})