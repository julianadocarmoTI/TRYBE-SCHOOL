/*  TDD
 2) A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse 
 array sem o elemento item caso ele exista no array
    1) Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado; 
    2) Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array
    [1, 2, 3, 4];
    3) Verifique se o array passado por parâmetro não sofreu alterações;
    4) Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado. 

Copie as funções já implementadas e desenvolva os testes. Separe as funções em 
arquivos para evitar qualquer tipo de problema. */

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [ ];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}


// implemente seus testes aqui
assert.strictEqual(typeof myRemove, 'function'); //testing if myRemove is a function
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4]); //Task 1
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4]); //Task 2

//Task 3
const myList = [5, 6, 7, 8];
console.log(myRemove(myList, 5));
assert.deepStrictEqual(myList, [5, 6, 7, 8]);

//Task 4
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4]); 

