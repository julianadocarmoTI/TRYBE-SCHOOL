/*Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior 
que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":
let fruits = [3, 4, 10, 1, 12];
A resolução do problema acontece em 3 etapas:
Interpretação;
Criação do algoritmo;
Codificação do algoritmo.
*/
let fruits = [3, 4, 10, 1, 12]; //1 - Adicionar o array
let sum = 0; // 2 - Variável com valor "0" que guardará o valor da soma;

for (let i = 0; i < fruits.length; i+= 1) { //3 - loop que percorre o array
    sum = sum + fruits[i];   // 4 - Incrementar a variável com o valor correspondente a cada loop;
}

if (sum > 15) {             // 5 - Criar um if com a condição da váriavel ser maior que 15;
    console.log(sum);       //6 - Caso a variável obedeça a condição - imprimir a variável;
  } else {
    console.log('valor menor que 16'); //Caso não obedeça a condição - imprimir a mensagem.
  }