/*Crie uma função que receba uma frase e retorne qual a maior palavra.
    Exemplo:  
    longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
*/
// Option 1
const longestWord = text => {

    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''
    
    for (const word of wordArray) {
        if (word.length > maxLength) {
            maxLength = word.length
            result = word
        }
    }
    
    return result
    }
    console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))


    // Option 2 - Longestword com sort em uma linha.

const longestWord = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0]
console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))