import React from 'react';
import './global.css'; // forma de importar a estilização
import Routes from './routes'; // não precisa colocar index pois qd se importa uma pagina o react sempre busca pelo index lá dentro

// JSX - Javascript XML - é qd o HTML está integrado dentro do javascript
function App() { // um componente no react é uma função que retorna HTML, começa sempre com maiusculo senão não funciona
  /**const [counter, setCounter] = useState(0); // useState retorna um Array [valor, função de atualização do valor]
  // todas as vezes q precisar de uma variavel que atualiza na página devemos criar um Estado para poder mudar o valor, não pode ser uma variável direta
  function increment() {
    setCounter(counter + 1);
    console.log(counter);
  }
  */
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
