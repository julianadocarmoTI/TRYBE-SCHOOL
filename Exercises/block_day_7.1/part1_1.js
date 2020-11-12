/* Corrija o código para que declarado na instrução if seja uma variável separada daquela declarada na iprimeira linha da função. Certifique-se de não usar a varpalavra - chave em nenhum lugar do código.

Este exercício foi elaborado para ilustrar a diferença entre como vare as letpalavras - chave atribuem escopo à variável declarada. Ao programar uma função semelhante à usada neste exercício, geralmente é melhor usar nomes de variáveis ​​diferentes para evitar confusão.

function checkScope() {
    'use strict';
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
         i = 'function scope'
    console.log('Function scope i is: ', i);
    return i;
  }
  */

  function checkScope() {
  'use strict'
  let i = 'function scope'

  if (true) {
    let i = 'block scope'
    console.log('Block scope i is: ', i)
  }
  i = 'function scope'
  console.log('Function scope i is: ', i)
  return i
}
