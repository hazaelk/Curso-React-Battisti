import styles from './Condicional.module.css'
import Button from './evento/Button'

import { useState } from 'react'
function Condicional() {

 const inputEmail = document.querySelector("#inputEmail")
 const [email, setEmail] = useState()
 const [userEmail, setUserEmail] = useState()
 function enviarEmail(e) {
   e.preventDefault()
   console.log(email)
   console.log('________________________')
   setUserEmail(email)
 }
 function limparEmail(e) {
  e.preventDefault()
  setUserEmail()
  setEmail()
  inputEmail.value = ''
  inputEmail.focus()
 }
 return (
   <div>
     <h2>Cadastre o seu e-mail:</h2>
     <form onSubmit={enviarEmail}>
      <input 
        id="inputEmail"
        type="email"
        placeholder="Digite aqui seu e-mail..."
        onChange={(e) => setEmail(e.target.value)}
        />
      <button>Enviar!</button>
      <br />
      {userEmail && (
       <div>
        <p>O e-mail do usuário inserido é: <u className={styles.testando}>{userEmail}</u></p>
        <Button event={limparEmail} text="Limpar Email"/>
       </div>
      )}
     </form>
   </div>
 )
}

export default Condicional