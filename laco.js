// let horas = 0;
// while (horas < 12) {
//     horas++;
//     console.log('Bom dia');
// }

// let i = 0;
// while (i < 6) {
//     i++;
//     console.log(i);
// }

// //-------------------------------
// let i = 0;
// do {
//     i ++;
//     console.log('Bom dia');
// } while (i < 6);

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

// }



// let i = 0;
// do {
//     i ++;
//     console.log(i);
// } while (i < 12);


// //-------------------------------

// for(let i = 100; i <= 200; i++) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


//ex. 01
// let result = 0;

// for (let i = 100; i <= 200; i++) {
//     result = i % 2;

//     if (result != 0) {
//         console.log(i);
//     }
// }


// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numeros.length; i++) {
//     console.log('Bom dia');
// }


// let num = 1;
// for (let i = 0; i < 10; i++) {
//     console.log(num++);
// }




//ex. tabuada
// console.log('Digite uma tabuada: ');

// let tabuada = 0;

// process.stdin.on('data', function(data) {
//     tabuada = Number(data.toString().trim());

//     for (let i = 0; i <= 10; i++) {
//         console.log(`${tabuada} x ${i} = ${tabuada * i}`);
//     }
//     process.exit();
// });


// console.log('Digite uma 10 números separados entre vírgula: ');

// let numeros = 0;

// process.stdin.on('data', function(data) {
//     numeros = data.toString().trim();
//     let array = numeros.split(',');
//     console.log(array);


//     process.exit();
// });




// console.log('Digite 3 números separados por vírgula: ');

// let numeros = '';

// process.stdin.on('data', function(data) {
//     numeros = data.toString().trim();
//     let array = numeros.split(',');
//     let arrayInv = [];
//     console.log(array);

//     for (let i = array.length - 1; i >= 0; i--) {
//         arrayInv.push(array[i]);
//     }
//     console.log(arrayInv);

//     process.exit();
// });




///Exercício 4

// let hobbies = [];

// console.log("Insira um hobby, ou digite 'sair' para terminar:");

// process.stdin.on('data', function(data) {
//     let opcao = data.toString().toLowerCase().trim();

//     if (opcao === 'sair') {

//         console.log("Aqui estão seus hobbies:");

//         hobbies.forEach(function(hobby, index) {
//             console.log((index) + ". " + hobby);
//         });


//         // for (let index = 0; index < hobbies.length; index++) {
//         //     console.log(index + " " +(hobbies[index] ));
            
//         // }

//         process.exit();
//     } else if (opcao === 'remover') {

//         console.log("Digite o número do hobby que deseja remover:");
//         process.stdin.once('data', function(indexData) {
//             let indexToRemove = parseInt(indexData.toString().trim());
//             console.log(hobbies.length);

//             if (indexToRemove >= 0 && indexToRemove < hobbies.length) {
//                 hobbies.splice(indexToRemove);
//                 console.log("Hobby removido. Insira outro hobby, ou 'remover' ou 'exibir' ou 'sair' para terminar:");
//             } else {
//                 console.log("Índice inválido. Insira outro número ou digite 'sair' para terminar:");
//             }
//         });
//     } else if (opcao == 'exibir') {
//         console.log("Aqui estão seus hobbies:");

//         hobbies.forEach(function(hobby, index) {
//             console.log((index) + ". " + hobby);
//         });

//         console.log("Insira outro hobby, ou 'remover' ou 'exibir' ou 'sair' para terminar:");
//     } else {
//         hobbies.push(opcao);
//         console.log("Hobby inserido com sucesso. Insira outro hobby, ou 'remover' ou 'exibir' ou 'sair' para terminar:");
//     }
// });

// console.log("digite um numero");
// let numeros = [1 , 3 , 5 , 9 , 7 , 5];
// let num = 0;
// process.stdin.on('data', function(data) {

//     num = Number(data.toString().trim());

    // for (let index = 0; index < numeros.length; index++) {
    //     if (num == numeros[index]) {
    //         console.log("ta aqui " + num);
    //     }   
    //     process.exit()    
    // }
    // console.log(" nao ta aqui " + num);

    // numeros.forEach(function(numero, index) {
    //     if (num == numero) {
    //         console.log("ta aqui " + num);
    //         process.exit() ;
    //     }   
    // });
    // console.log(" nao ta aqui " + num);
    // process.exit()  

    // console.log(numeros.includes(num));
    // if (numeros.includes(num) == true) {
    //     console.log("ta aqui " + num);
    // } else {
    //     console.log("nao ta aqui " + num);
    // }
// })


// let array = [2, 3 , 55, 6, 22, 15, 100, 8]
// let contUm = 0;
// let contDois = 0;
// let result = 0;

// for (let i = 0; i < array.length; i++) {
//     result = array[i] % 2;

//     if (result == 0) {
//         contUm++;
//     } else {
//         contDois++;
//     }

// }

// console.log(contUm, contDois);





// let notas = [35, 50, 70, 85];
// let soma = 0;
// let media = 0;

// for (let i = 0; i < notas.length; i++) {
//     // soma = notas[i] + soma;
//     soma += notas[i];
// }
// media = soma / notas.length;

// if (media >= 70) {
//     console.log("Aprovado");
// } else {
//     console.log("Reprovado");
// }

// console.log(media);


//ex 06 prova

let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0];
let soma = 0;
let media = 0;
let acimaMedia = 0;
let abaixoMedia = 0;

//parte A média
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
media = soma / notas.length;

// Parte B: Max e Min
let maxNota = notas[0];
let minNota = notas[0];
for (let i = 1; i < notas.length; i++) {
    if (notas[i] > maxNota) {
        maxNota = notas[i];
    }
    if (notas[i] < minNota) {
        minNota = notas[i];
    }
}

// Parte C: Acima da média
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acimaMedia++;
    }
}

// Parte E: Abaixo da média
for (let i = 0; i < notas.length; i++) {
    if (notas[i] < media) {
        abaixoMedia++;
    }
}

//parte D
let novaNota = 8.0;
notas.push(novaNota);

// Imprimir lista atualizada de notas
console.log("Lista atualizada de notas:", notas);


console.log("Lista atualizada de notas:", notas);

console.log("Média:", media);
console.log("Nota Máxima:", maxNota);
console.log("Nota Mínima:", minNota);
console.log("Acima da média:", acimaMedia);
console.log("Abaixo da média:", abaixoMedia);