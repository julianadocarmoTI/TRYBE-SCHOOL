/*  TDD
 5) Compare dois objetos (JSON) para verificar se são idênticos ou não 

Copie as funções já implementadas e desenvolva os testes. Separe as funções em 
arquivos para evitar qualquer tipo de problema. */

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);
assert.notDeepStrictEqual(obj2, obj3);