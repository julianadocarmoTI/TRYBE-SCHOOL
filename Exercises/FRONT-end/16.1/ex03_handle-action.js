// freeCodeCamp
// Redux: lidar com uma ação na loja
/* Depois que uma ação é criada e despachada, a loja Redux precisa saber como 
responder a essa ação. Este é o trabalho de uma reducerfunção. Os redutores no 
Redux são responsáveis ​​pelas modificações de estado que ocorrem em resposta às ações. 
A reducerrecebe statee actioncomo argumentos e sempre retorna um novo state. 
É importante ver que essa é a única função do redutor. Não tem efeitos colaterais - 
nunca chama um endpoint de API e nunca tem surpresas ocultas. O redutor é simplesmente
 uma função pura que assume o estado e a ação e, em seguida, retorna um novo estado.

 Outro princípio fundamental no Redux é que ele stateé somente leitura.
 Em outras palavras, a reducerfunção deve sempre retornar uma nova cópia statee nunca 
 modificar o estado diretamente. Redux não impõe imutabilidade de estado, no entanto, 
 você é responsável por aplicá-lo no código de suas funções de redutor. Você vai 
 praticar isso em desafios posteriores.

 O editor de código tem o exemplo anterior e também o início de uma reducerfunção para 
 você. Preencha o corpo da reducerfunção para que, se receber uma ação do tipo, 
 'LOGIN'ela retorne um objeto de estado com logindefinido como true. Caso contrário,
  ele retorna o atual state. Observe que o atual statee o despachado actionsão 
  passados ​​para o redutor, para que você possa acessar o tipo da ação diretamente 
  com action.type. */

  const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  //  mude o código abaixo desta linha
  switch (action.type) {
    case 'LOGIN':
      return { login: true };
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};