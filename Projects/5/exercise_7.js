//BLOCK 4.2 - JavaScript ARRAY e Loop FOR 
/* 7) Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* o valor da variável "smaller" poderia ser qualquer um, desde que fosse maior que o 
maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo 
estaria errado, pois ele nunca acharia um número menor que 1 no array.
*/

let smaller = 1000000000;

for(index = 0; index < numbers.length; index++){
    if (numbers[index] < smaller) {
        smaller = numbers[index];
    }
}
console.log(smaller);