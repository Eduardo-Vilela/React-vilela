import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css' 
import { memo } from 'react'
const ItemList = memo( ({productos})=> {
    return (
        <div className="cardAjuste">
            {
              productos.map((productos) => <Item productos={productos}/>
                       )}
        </div>
    )
}
,(oldProps, newProps)=> oldProps.productos.length === newProps.productos.length )
export default ItemList
