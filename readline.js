// Exercício temperatura

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question(
//   "Escolha a escala de origem (f para Fahrenheit, c para Celsius, k para Kelvin): ",
//   (scale) => {
//     switch (scale.toLowerCase()) {
//       case "c":
//         rl.question("Insira o valor da temperatura em Celsius: ", (value) => {
//           const celsius = parseFloat(value);

//           if (isNaN(celsius)) {
//             console.log("Por favor, insira um número válido.");
//           } else {
//             // const fahrenheit = (celsius * 9) / 5 + 32;
//             const fahrenheit = (celsius * 1.8) + 32;
//             const kelvin = celsius + 273.15;
//             console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}`);
//             console.log(`Kelvin: ${kelvin.toFixed(2)}`);
//           }
//           rl.close();
//         });
//         break;

//       case "f":
//         rl.question(
//           "Insira o valor da temperatura em Fahrenheit: ",
//           (value) => {
//             const fahrenheit = parseFloat(value);

//             if (isNaN(fahrenheit)) {
//               console.log("Por favor, insira um número válido.");
//             } else {
//             //   const celsius = ((fahrenheit - 32) * 5) / 9;
//               const celsius = ((fahrenheit - 32) / 1.8);
//             //   const kelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
//               const kelvin = (celsius +  273.15);
//               console.log(`Celsius: ${celsius.toFixed(2)}`);
//               console.log(`Kelvin: ${kelvin.toFixed(2)}`);
//             }
//             rl.close();
//           }
//         );
//         break;

//       case "k":
//         rl.question("Insira o valor da temperatura em Kelvin: ", (value) => {
//           const kelvin = parseFloat(value);

//           if (isNaN(kelvin)) {
//             console.log("Por favor, insira um número válido.");
//           } else {
//             const celsius = kelvin - 273.15;
//             // const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;
//             const fahrenheit = ((kelvin - 273.15) * 1.8 + 32);
//             console.log(`Celsius: ${celsius.toFixed(2)}`);
//             console.log(`Fahrenheit: ${fahrenheit.toFixed(2)}`);
//           }
//           rl.close();
//         });
//         break;

//       default:
//         console.log("Escala inválida. Por favor, escolha f, c ou k.");
//         rl.close();
//     }
//   }
// );

// exercicio fatorial

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Digite um número para calcular seu fatorial: ', (input) => {
//     const num = parseInt(input);

//     if (isNaN(num) || num < 0) {
//         console.log('Por favor, insira um número inteiro não negativo válido.');
//     } else {
//         let fatorial = 1;

//         for (let i = 1; i <= num; i++) {
//             fatorial *= i;
//         }

//         console.log(`O fatorial de ${num} é ${fatorial}.`);
//     }

//     rl.close();
// });


// Exercicio fibonacci

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Digite um número para gerar os "n" termos da sequência de Fibonacci: ', (input) => {
//     const n = parseInt(input);

//     if (isNaN(n) || n <= 0) {
//         console.log('Por favor, insira um número inteiro positivo válido.');
//     } else {
//         let fib = [0, 1];
//         if (n === 1) {
//             console.log('Sequência de Fibonacci com 1 termo: [0]');
//         } else if (n === 2) {
//             console.log('Sequência de Fibonacci com 2 termos: [0, 1]');
//         } else {
//             for (let i = 2; i < n; i++) {
//                 fib.push(fib[i - 1] + fib[i - 2]);
//             }
//             console.log(`Sequência de Fibonacci com ${n} termos: [${fib.join(', ')}]`);
//         }
//     }

//     rl.close();
// });


// Exercicio cad funcionarios


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let funcionarios = [];
// let numFunc = 0;

// rl.question('Quantos funcionários você deseja cadastrar? ', (num) => {
//     numFunc = parseInt(num);

//     if (isNaN(numFunc) || funcionarios <= 0) {
//         console.log('Por favor, insira um número inteiro positivo válido.');
//         rl.close();
//         return;
//     }

//     let count = 0;

//     const askEmployeeDetails = () => {
//         if (count < numFunc) {
//             rl.question(`Digite o nome do funcionário ${count + 1}: `, (name) => {
//                 rl.question(`Digite o cargo do funcionário ${count + 1}: `, (position) => {
//                     rl.question(`Digite o salário do funcionário ${count + 1}: `, (salary) => {
//                         salary = parseFloat(salary);

//                         if (isNaN(salary) || salary <= 0) {
//                             console.log('Por favor, insira um salário válido.');
//                         } else {
//                             funcionarios.push({ name, position, salary });
//                             count++;
//                         }

//                         askEmployeeDetails();
//                     });
//                 });
//             });
//         } else {
//             let highestSalaryEmployee = funcionarios.reduce((prev, curr) => {
//                 return (prev.salary > curr.salary) ? prev : curr;
//             });

//             console.log(`O funcionário com o maior salário é ${highestSalaryEmployee.name}, ${highestSalaryEmployee.position} com um salário de R$${highestSalaryEmployee.salary.toFixed(2)}.`);

//             rl.close();
//         }
//     };

//     askEmployeeDetails();
// });
