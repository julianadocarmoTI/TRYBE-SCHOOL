/* 2) Escreva a função wordLengths para passar nos testes já implementados. 

Copie os testes já implementadas e desenvolva as funções. Separe as funções 
em arquivos para evitar qualquer tipo de problema.
*/

const assert = require('assert');
// escreva a função wordLengths aqui

const wordLengths = (array) => {
    const output = [];
    for (let i = 0; i < array.length; i += 1) {
      output.push(array[i].length);
    }
    return output;
  };
 console.log(wordLengths(['sun', 'potato', 'roundabout', 'pizza']));
 
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);