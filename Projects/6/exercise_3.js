//BLOCK 4.3 - JavaScript - Lógica de Programação e Algoritmos
/* 3) Agora inverta o lado do triângulo. Por exemplo:
n = 5
    *
   **
  ***
 ****
*****
*/
// SOLUTION OPTION 1:
let n = 5;
let lineIndex;
let columnIndex;
let symbol = '*';
let inputLine = '';
let inputPosition = n;

for (lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
};