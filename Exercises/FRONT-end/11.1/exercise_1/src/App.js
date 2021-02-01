import logo from './logo.svg';
import './App.css';

const tarefas = ["Acordar", "Rezar", "Escovar os dentes", "Estudar", "Preparar o café"];

const App = () => ( <ul>{ 
  tarefas.map(item => <li>{ item }</li>) }
  </ul> );


export default App;

// 1 ) Crie um novo projeto utilizando npx create-react-app . 
/* 2 ) Crie uma lista de tarefas simples que: 
 Leia as tarefas de dentro de um Array.
 Use a função map para criar cada item da lista no HTML. */