//BLOCK_DAY 4.1 - exercise 3
//Faça um programa que retorne o maior de 3 números.
//Defina no começo do programa 3 variáveis com os valores que serão comparados.

let j = 11;
let o = 4;
let s = 13;

let check;

if (s > o && s > j) {
    check = ("'s' é o maior dos 3");
} else if (o > s && o > j) {
    check = ("'o' é o maior dos 3");
} else {
   check = ("'j' é o maior dos 3");
};

console.log(check);