//BLOCK 4.2 - JavaScript ARRAY e Loop FOR 
/* 5) Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
*/
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let bigger = 0;

for(index = 0; index < numbers.length; index++){
    if (numbers[index] > bigger) {
        bigger = numbers[index];
    }
}
console.log(bigger);