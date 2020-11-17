/*  TDD
 3) A função myRemoveWithoutCopy(arr, item) recebe um array arr e retorna o 
 próprio array sem o elemento item caso ele exista no array
    1) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array 
    esperado ; 
    2) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o 
    array [1, 2, 3, 4];
    3) Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array 
    passado por parâmetro sofreu alterações;
    4) Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o 
    array esperado . 

Copie as funções já implementadas e desenvolva os testes. Separe as funções em 
arquivos para evitar qualquer tipo de problema. */

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
//Task 0 : testing if myRemoveWIthoutCopy is a function
assert.strictEqual(typeof myRemoveWithoutCopy,'function'); 

assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 4]); //Task 1
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4]); //task2

//Task 3
const newArray = [5, 6, 7, 8];
assert.deepStrictEqual(myRemoveWithoutCopy(newArray,5),[6,7,8]);

// Task 4
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4]);