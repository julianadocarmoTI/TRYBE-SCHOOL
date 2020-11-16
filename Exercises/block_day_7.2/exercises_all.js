/* 
1) Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve 
possuir três parâmetros, sendo eles: o objeto a ser modificado,a chave que deverá 
ser adicionada e o valor dela.

2) Crie uma função para listar as keys de um objeto. Essa função deve receber um 
objeto como parâmetro.

3) Crie uma função para mostrar o tamanho de um objeto.
    
4) Crie uma função para listar os valores de um objeto. Essa função deve receber 
um objeto como parâmetro.
    
5) Crie um objeto de nome allLessons, que deve agrupar todas as aulas através 
do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas 
chaves: lesson1, lesson2 e lesson3. 
Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

6) Usando o objeto criado no exercício 5, crie uma função que retorne o número 
total de estudantes em todas as aulas.

7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no 
objeto. Por exemplo:

console.log(getValueByNumber(lesson1, 0));
// Output: 'Matématica'

8) Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave
e o valor da chave. Exemplo: 

console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false

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

// EXERCISE 2  - list the keys of an object
const listKeys = (obj) =>  Object.keys(obj);
console.log(listKeys(lesson1));

// EXERCISE 3 - show the size of an object
const sizeObj = (obj) =>  Object.keys(obj).length;
console.log(sizeObj(lesson1));

// EXERCISE 4 - List all values of an object
const listValues = (obj) =>  Object.values(obj);
console.log(listValues(lesson1));

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

// EXERCISE 7 - Return the key value to a certain position
const getValueByNumber = (obj,position) => Object.values(obj)[position];
console.log(getValueByNumber(lesson1,0));

// EXERCISE 8 - Verify if the pair keys/value exist
const verifyPair = (obj, key, value) => {
  const arr = Object.entries(obj);
  let isEqual = false;
  for (let i in arr) {
    if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
  }
  return isEqual;
};
console.log(verifyPair(lesson2,'professor','Carlos'));