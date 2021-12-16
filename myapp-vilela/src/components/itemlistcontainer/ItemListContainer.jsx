import {useEffect, useState} from 'react'
import {getFetch} from "../../helpers/getFetch.js"
import ItemList from "../ItemList/ItemList.jsx"
import {useParams} from 'react-router-dom'

function ItemListContainer(  {greeting} )  {

  const [productos, setProductos] = useState([])
  const [loading , setLoading] = useState(true)
     
  const { idCate }  = useParams()
  useEffect(() => {
    if (idCate) {
      getFetch
      .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate)))
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
    } else{
      getFetch
      .then(resp => setProductos(resp))
      .catch(err => console.log(err))
      .finally(()=>setLoading(false))
    }
  },[])
   console.log(idCate)
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
