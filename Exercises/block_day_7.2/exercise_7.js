/* 
7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no 
objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'


Para os exercícios  use o seguinte código. */

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// EXERCISE 7 - Return the key value to a certain position
const getValueByNumber = (obj,position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1,0));
