import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css' 
import { memo } from 'react'
import {useEffect, useState} from 'react'
import {getFirestore, query, doc ,getDoc } from 'firebase/firestore' 

const ItemList = memo( ({productos})=> {

    const [producto, setProducto] = useState([])
    const [loading , setLoading] = useState(true)

       useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'productos','pbApXmPM9Viss69OdRyJ')
    getDoc(queryDb)
     .then(resp => setProducto({ id:  resp.id, ...resp.data() }))
     .catch(err => console.log(err))
     .finally(() => setLoading(false))
   },[])

   console.log(producto)
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
