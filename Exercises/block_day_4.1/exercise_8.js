//BLOCK_DAY 4.1 - exercise 8
//Escreva um programa que defina 3 números em variáveis no seu começo e retorne "true",
//se pelo menos uma das 3 for par. Caso contrário, ele retorna "false".
//Bônus: use somente um "if".

let e = 3;
let f = 5;
let g = 11;

let check;

if ((e % 2 === 0 || f % 2 === 0 || g % 2 === 0)) {
    check = "true"
} else {
    check = "false"
}

console.log(check);
