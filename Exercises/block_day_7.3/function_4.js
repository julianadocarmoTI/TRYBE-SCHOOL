/* 4) Escreva a função findTheNeedle para passar nos testes já implementados.  

Copie os testes já implementadas e desenvolva as funções. Separe as funções 
em arquivos para evitar qualquer tipo de problema.
*/

const assert = require('assert');
// escreva a função findTheNeedle aqui

const findTheNeedle = (arrayWords, findString) => {
    let expected = -1;
    for (let index = 0; index < arrayWords.length; index += 1) {
      if (arrayWords[index] === findString) {
        expected = Number(index);
      } 
    }
    return expected;
  }
  console.log(findTheNeedle(['plant', 'shelf', 'arrow', 'bird'], 'bird'));

//
let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);