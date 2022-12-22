import Button from './evento/Button'
function Evento({ numero }) {
 function meuEvento() {
  console.log(`Ativando o primeiro evento.`)
 }

 function segundoEvento() {
  console.log('Ativando o segundo evento.')
 }

 return (
   <div>
    <p>Clique para disparar um evento:</p>
    {/* versão 2 */}
    <Button event={meuEvento} text="Primeiro Evento" />
    <Button event={segundoEvento} text="Segundo Evento" />
    
    {/* versão 1 */}
    <button onClick={meuEvento}>Ativar!</button>
   </div>
 )
}

export default Evento