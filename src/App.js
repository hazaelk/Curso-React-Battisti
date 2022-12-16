import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase'
import './App.css';

function App() {
  const name = 'will'
    // window.prompt("Qual seu nome?")
  const newName = name.toLocaleUpperCase()

  const sum = (a,b) => a + b

  const imgUrl = "https://via.placeholder.com/"
  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <h3>Olá {name}</h3>
      <h3>Usando variável uppercaseada {newName}</h3>
      <p>Soma: 3 + 3 = {sum(3,3)}</p>
      <img src={imgUrl+"150"} alt="Minha imagem" />
      <SayMyName nome="José" />
      <SayMyName nome={name} />
      <Pessoa 
        nome={name} 
        idade="23" 
        profissao="Programador" 
        foto={imgUrl+"50"} />
        <Frase />
    </div>
  );
}

export default App;
