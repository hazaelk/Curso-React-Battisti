function Pessoa({ nome, idade, profissao, foto }) {
 return (
  <div>
   <hr />
   <img src={foto} alt={nome} />
   <h2>Nome: {nome}</h2>
   <p>Idade: {idade}</p>
   <p>Profissão: {profissao}</p>
   <hr />
  </div>
 )
}

export default Pessoa