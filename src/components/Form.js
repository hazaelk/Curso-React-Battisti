import { useState } from 'react'
function Form() {
 function cadastrarUsuario(e) {
  e.preventDefault()
  const nome = document.getElementById('nome').value
  console.log(`Usuário ${nome} cadastrado!`)
  console.log(pass)
 }

 const [pass, setPass] = useState('')
 
 
 
 return (
  <div>
   <hr />
   <h1>Meu cadastro:</h1>
   <form onSubmit={cadastrarUsuario}>
    <div>
     <h5>Input atribuindo via Javascript puro</h5>
     <label htmlFor="nome">Nome:</label>
     <input type="text" id="nome" name="nome" placeholder="Digite o seu nome" />
    </div>
    <div>
     <h5>Input atribuindo via react</h5>
     <label htmlFor="password">Senha:</label>
     <input type="password" id="password" name="password"
     placeholder="Digite a sua senha" onChange={(e) => setPass(e.target.value)} />
    </div>
    <div>
     <input type="submit" value="Cadastrar" />
    </div>
   </form>
  </div>
 )
}

export default Form