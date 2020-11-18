/* 3) Escreva a função addAllnumbers para passar nos testes já implementados. 

Copie os testes já implementadas e desenvolva as funções. Separe as funções 
em arquivos para evitar qualquer tipo de problema.
*/

const assert = require('assert');
// escreva a função addAllnumbers aqui

const addAllnumbers = (array) => {
    let output = 0;
    for (const item in array) {
      output += array[item];
    }
    return output;
  };
  console.log(addAllnumbers([9, 23, 10, 3, 8]));
  
//
const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = addAllnumbers(numbers);

assert.strictEqual(typeof addAllnumbers, 'function');
assert.strictEqual(output, expected);