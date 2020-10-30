//BLOCK_DAY 4.1 - exercise 4
//Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

let n = 18;

let check;
if (n > 0) {
    check = "positive";
} else if (n < 0) {
    check = "negative";
} else {
    check = "zero";
}

console.log(check);