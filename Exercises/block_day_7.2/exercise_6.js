/* 
6) Usando o objeto criado no exercício 5, crie uma função que retorne o número 
total de estudantes em todas as aulas.

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

 // EXERCISE 5 - create an object with allLessons
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 }); 
console.log(allLessons);
 

// EXERCISE 6 - Return the total number of students (values)
const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
};
console.log(numberOfStudents(allLessons));