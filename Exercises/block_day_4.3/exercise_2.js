//BLOCK 4.3 - JavaScript - Lógica de Programação e Algoritmos
/* 2) Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. 
Por exemplo:
n = 5
*
**
***
****
*****
*/
// SOLUTION OPTION 1:
let n = 5;

    let asterisks = "";

    for (let addAsterisksLine = 0; addAsterisksLine < n; addAsterisksLine++) {   
        asterisks = asterisks + "*";

        console.log(asterisks); //adiciona o console.log no bloco de execução
    }
   //fora do bloco o console.log imprimiria apenas uma linha com os 5 asterisco "*****"

   // SOLUTION OPTION 2:
let size = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  console.log(inputLine);
  inputLine = inputLine + symbol;
};