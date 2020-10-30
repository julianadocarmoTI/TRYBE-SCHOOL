//BLOCK 4.3 - JavaScript - Lógica de Programação e Algoritmos
/* 6) Faça um programa que diz se um número definido numa variável é primo ou não.
       . Um número primo é um número que só é divisível por 1 e por ele mesmo, ou seja, 
         a divisão dele com quaisquer outros números dá resto diferente de zero.
*/         
// SOLUTION OPTION 1:
let divisors;
let numberToCheck = 3;

for (let number = 2; number < numberToCheck && divisors !== 1; number += 1) {
  divisors = 0;
  if (numberToCheck % number == 0) divisors += 1;
}

if (divisors === 0) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');

