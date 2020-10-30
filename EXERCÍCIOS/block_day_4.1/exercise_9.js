//BLOCK_DAY 4.1 - exercise 9
//Escreva um programa que defina 3 números em variáveis no seu começo e retorne "true"
//se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
//Bônus: use somente um "if".

let e = 4;
let f = 2;
let g = 6;

let check;

if ((e % 2 === 0 || f % 2 === 0 || g % 2 === 0)) {
    check = "false"
} else {
    check = "true"
}

console.log(check);
