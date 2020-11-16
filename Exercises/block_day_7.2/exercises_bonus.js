/*      BÔNUS 
1) Crie uma função para contar quantos estudantes assistiram às aulas de matemática. 
Use o objeto criado no exercício 5.

2) Crie uma função que deverá retornar um objeto que representa o relatório do 
professor ou professora, as aulas que ele ou ela ministrou e o número total de 
estudantes. Use o objeto criado no exercício 5:

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

// BÔNUS - 1) Functtion to count how many students watched Math classes
const numberOfStudents = (obj) => {
  let total = 0;
  const array = Object.keys(obj);
  for (i in array) {
    if (obj[array[i]].materia === 'Matemática')
    total += obj[array[i]].numeroEstudantes;
  }
  return total;
};
console.log(numberOfStudents(allLessons));


// BÔNUS - 2)
const getInfo = (obj, name) => {
  const allLessons = [];
  let allStudent = 0;
  const array = Object.values(obj);
  for (i in array) {
    if (array[i].professor === name) {
      allLessons.push(array[i].materia)
      allStudent += array[i].numeroEstudantes;
    }
  }
  return { lessons: allLessons, estudantes: allStudent };
}

const createReport = (allLessons, name) => {
  const report = {};
  report.professor = name;
  Object.assign(report, getInfo(allLessons, name));
  return report;
}
console.log(createReport(allLessons, 'Maria Clara')); 