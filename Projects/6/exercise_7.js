/* 7) Faça um programa que encontre todos os números primos entre 0 e "n" e coloque-os num array
chamado numerosPrimos;
*/         
let numerosPrimos = [];
let n = 100;

for (let numero = 2; numero <= n; numero++) {

    let qtdDeDivisores = 0;
    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor === 0) {
            qtdDeDivisores = qtdDeDivisores + 1;
        }
    }
    if (qtdDeDivisores === 0) {
        numerosPrimos.push(numero);
    }
    
}
console.log(numerosPrimos) 