//BLOCK 4.2 - JavaScript ARRAY e Loop FOR 
/*Utilizando o array criado no exercício anterior imprima o resultado da divisão
 de cada um dos elementos por 2.
*/

let array = [];

for (i = 1; i <= 25; i += 1) {
    array.push(i)  ;
}

for (let n = 0; n < array.length; n++) {
    console.log(array[n] / 2);
  };
