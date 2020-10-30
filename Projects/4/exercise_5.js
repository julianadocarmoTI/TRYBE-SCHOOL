//BLOCK_DAY 4.1 - exercise 5
//Faça um programa que defina 3 variáveis com os valores dos 3 ângulos internos de um triângulo. Retorne "true" se os ângulos representarem os ângulos de um triângulo e "false" caso contrário.

let a = 90;
let b = 45;
let c = 45;

let sum = a + b +c;
let result;

if (sum === 180 ) {
    result = "true";
} else {
    result = "false";
}
console.log(result);
