//BLOCK 4.2 - JavaScript ARRAY e Loop FOR 
/* 3) Calcule e imprima a média aritmética dos valores contidos no array;
obs. A média aritmética é o resultado da soma de todos os elementos divido 
pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(index = 0; index < numbers.length; index++){
    sum += numbers[index];
}

let arithmetic = sum / numbers.length
console.log(arithmetic);
