/* Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions e template literals.

    Crie uma função que receba um número e retorne seu fatorial.
        Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos 
        os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
        Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver
        com uma linha.
*/

// Option 1
    const factorial = number => {
        let result = 1
        for (let i = 2; i <= number; i += 1) {
            result *= i
        }
        return result 
    }
    console.log(factorial(5))

// Option 2

const fact= number => number > 1 ? number * fact(number - 1) : 1
console.log(fact(5))

// Option 3
function fact2(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
    else {
      return (number*fact2(number-1));
    }
    }
  console.log(fact2 (5));

  