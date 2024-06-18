// let frutas = [];

// frutas = ["maca", "banana", "abacaxi", "abacaxi", "abacate", "melancia"];

// frutas.push('laranja');
// console.log(frutas.length - 1);

// frutas.pop();
// frutas.shift();
// console.log(frutas);
// frutas.splice(2,1);
// frutas.splice(3,1);
// console.log(frutas);





//Exercicio da média entre 3 notas

process.stdout.write("Digite a primeira nota1: \n");
let notas = [];

process.stdin.once("data", function (data) {
    let nota1 = Number(data.toString().trim());
    notas.push(nota1);
    process.stdout.write("Digite a primeira nota2: \n");
    process.stdin.once("data", function (data) {
        let nota2 = Number(data.toString().trim());
        notas.push(nota2);

        process.stdout.write("Digite a primeira nota3: \n");
        process.stdin.once("data", function (data) {
            let nota3 = Number(data.toString().trim());
            notas.push(nota3);

            let result = ((notas[0] + notas[1] + notas[2]) / 3);

            console.log("A media das 3 notas eh " + result)

            if (notas[0] > notas[1] && notas[0] > notas[2]) {

                console.log("A maior nota eh a nota 1 " + notas[0])
            } else if (notas[1] > notas[0] && notas[1] > notas[2]) {
                console.log("A maior nota eh a nota 2 " + notas[1])
            } else {
                console.log("A maior nota eh a nota 3 " +notas[2])
            }
            process.exit()
        });
    });
});


