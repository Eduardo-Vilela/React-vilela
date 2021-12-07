import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer(  {greeting} )  {

    const inicial = 1
    const maximo = 10

    return ( 
        <>
          { greeting }
          Gorras NY
          <ItemCount inicial={inicial} maximo={maximo}/>
        </>
    )
}

export default ItemListContainer
