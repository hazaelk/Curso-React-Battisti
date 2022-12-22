import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'

import './App.css';
import Condicional from './components/Condicional';

function App() {
  // const name = 'will'
  //   window.prompt("Qual seu nome?")
  // const newName = name.toLocaleUpperCase()

  // const sum = (a,b) => a + b

  // const imgUrl = "https://via.placeholder.com/"
  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
    </div>
  );
}

export default App;
