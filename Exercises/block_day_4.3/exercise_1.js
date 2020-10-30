//BLOCK 4.3 - JavaScript - Lógica de Programação e Algoritmos
/* 1) faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um 
quadrado feito de asteriscos de lado de tamanho n. Por exemplo:
n = 5
*****
*****
*****
*****
*****
*/
// SOLUTION OPTION 1: 
let n = 5;
for (let repeteLinha = 0; repeteLinha < n; repeteLinha++) {

    let asterisks = "";

    for (let addAsterisksLine = 0; addAsterisksLine < n; addAsterisksLine++) {   
        asterisks = asterisks + "*";
    }
    console.log(asterisks);
}

// SOLUTION OPTION 2: 
//let n = 5;
let lineIndex;
let symbol = '*';
let inputLine = '';

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
};
for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
};