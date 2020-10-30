//BLOCK 4.2 - JavaScript ARRAY e Loop FOR 
/* 2) Somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;

for(index = 0; index < numbers.length; index++){
    sum += numbers[index];
}
console.log(sum);
