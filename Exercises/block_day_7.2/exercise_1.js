/* 
1) Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve 
possuir três parâmetros, sendo eles: o objeto a ser modificado,a chave que deverá 
ser adicionada e o valor dela.

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

// EXERCISE 1 - Add the morning entries to lesson2
const addNewKey = (obj, key, value) => {
  obj[key] = value;
  return obj;
  };
  
console.log(addNewKey(lesson2, 'turno', 'noite'));
