import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Willian'
  const newName = name.toLocaleUpperCase()

  const sum = (a,b) => a + b

  const imgUrl = 'https://via.placeholder.com/150'
  return (
    <div className="App">
      <h2>Alterando JSX</h2>
      <h3>Olá {name}</h3>
      <h3>Usando variável uppercaseada {newName}</h3>
      <p>Soma: 3 + 3 = {sum(3,3)}</p>
      <img src={imgUrl} alt="Minha imagem" />
    </div>
  );
}

export default App;
