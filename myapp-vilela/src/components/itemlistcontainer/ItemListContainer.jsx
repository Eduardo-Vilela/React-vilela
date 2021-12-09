import {useEffect, useState} from 'react'
import {getFetch} from "../../helpers/getFetch.js"
import ItemList from "../ItemList/ItemList.jsx"


function ItemListContainer(  {greeting} )  {

  const [productos, setProductos] = useState([])
  const [loading , setLoading] = useState(true)
     
  useEffect(() => {
    getFetch
  .then(resp => setProductos(resp))
  .catch(err => console.log(err))
  .finally(()=>setLoading(false))
  },[])
  
    return ( 
        <>
          { greeting }
          { loading ? 
          <h2>cargando datos...</h2> 
          :
          <ItemList productos= {productos}/>
          }
          
        </>
    )
}

export default ItemListContainer
