/* 
4) Crie uma função para listar os valores de um objeto. Essa função deve receber 
um objeto como parâmetro.

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

// EXERCISE 4 - List all values of an object
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));
