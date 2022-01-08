import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css' 
import { memo } from 'react'
import {useEffect, useState} from 'react'
import {getFirestore, query, doc ,getDoc } from 'firebase/firestore' 

const ItemList = memo( ({productos})=> {

    const [producto, setProducto] = useState([])
    const [loading , setLoading] = useState(true)

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
