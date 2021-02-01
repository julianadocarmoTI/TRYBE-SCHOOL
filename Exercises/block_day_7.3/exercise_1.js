/*  TDD
 1) A função sum(a, b) retorna a soma do parâmetro a com o b
    1) Teste se o retorno de sum(4, 5) é 9;
    2) Teste se o retorno de sum(0, 0) é 0;
    3) Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5);
    4) Teste se a mensagem de erro é "parameters must be numbers" quando realizar a 
    chamada sum(4, "5").

Copie as funções já implementadas e desenvolva os testes. Separe as funções em 
arquivos para evitar qualquer tipo de problema. */

const assert = require('assert');
function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

// implemente seus testes aqui
assert.strictEqual(typeof sum, 'function'); //Testing if sum is a function
assert.strictEqual(sum(4,5), 9); //Task 1
assert.strictEqual(sum(0,0), 0); //Task 2
assert.throws(() => {sum(4,'5')}); //Task 3
assert.throws(() => {sum(4,'5')}, /^Error: parameters must be numbers$/); //Task 4

console.log(sum(4,5));

let numbers = [5, 1, 0, 200, 5, 10, 8, 7, 500, 35];
numbers.sort((a, b) => a - b);
console.log(numbers);