//BLOCK_DAY 4.1 - exercise 7
//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
//Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada
//for menor que 0 ou maior que 100.

let note = 80;

let result;
if (note < 0 || note > 100) {
    result = "ERRO";
} else if (note >= 90) {
    result = "A";
} else if (note >= 80) {
    result = "B";
} else if (note >= 70) {
    result = "C";
} else if (note >= 60) {
    result = "D";
} else if (note >= 50) {
    result = "E"
} else {
    result = "F";
}
console.log(result);