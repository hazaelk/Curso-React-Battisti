import Item from './Item'
function List() {
 // o FRAGMENT NÃO SERA COLOCADO NA DOM!
 return (
  <>
   <h1>Minha Lista</h1>
    <ul>
     <Item marca="Ferrari" ano_lancamento={1985} />
     <Item marca="Fiat" ano_lancamento={1964} />
     <Item marca="Renault" ano_lancamento={1999} />
     <Item marca="Chevrolet" ano_lancamento={1999} />
     <Item /> {/* AS PROPS AQUI SERÃO A DEFAULT NO COMPONENT ITEM */}
    </ul>
  </>
 )
}

export default List