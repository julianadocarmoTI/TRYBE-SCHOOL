/* Uma matriz é declarada como const s = [5, 7, 2]. Altere a matriz para [2, 5, 7]
usar várias atribuições de elemento, e imprima na tela.

 const s = [5, 7, 2];
 function editInPlace() {
  'use strict';
      Only change code below this line
      Using s = [2, 5, 7] would be invalid
      Only change code above this line
  }
   editInPlace(); */

// Option 1
const s = [5, 7, 2];
function editInPlace() {
  'use strict';
s[0] = 2;
s[1] = 5;
s[2] = 7;
}
editInPlace();
console.log(s);


// Option 2 
const sS = [5, 7, 2];
sS.sort((a,b) => a - b);
console.log(sS);