import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css' 
function ItemList({productos}) {
    return (
        <div className="cardAjuste">
            {
              productos.map((productos) => <Item productos={productos}/>
                       )}
        </div>
    )
}

export default ItemList
