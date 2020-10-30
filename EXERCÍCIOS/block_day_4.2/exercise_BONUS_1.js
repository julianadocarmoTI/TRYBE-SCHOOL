//BLOCK 4.2 - JavaScript ARRAY e Loop FOR 
/* Ordene o array "numbers" em ordem crescente e imprima seus valores;
 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Vamos ter que percorrer todo o vetor, logo:
for (let i = 1; i < numbers.length; i++) {
// Dentro de cada iteração percorremos novamente o vetor em busca dos pares
  for (let j = 0; j < i; j++) {
// Comparamos 
    if (numbers[j] > numbers[i]) {
// swap (trocamos)
      let position = numbers[j];
      numbers[j] = numbers[i];
      numbers[i] = position;
    }
  }
}
console.log(numbers);

