import {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList.jsx"
import {useParams} from 'react-router-dom'
import {getDocs, getFirestore, query ,collection , where} from 'firebase/firestore' 
import '../../components/Itemlistcontainer/itemlistcontainer.css'

function ItemListContainer(  {greeting} )  {

  const [productos, setProductos] = useState([])
  const [loading , setLoading] = useState(true)
    
  const {idCate} = useParams()

  

   useEffect(() => {
    if (idCate) { 
      const db = getFirestore() 
      const queryCollection = query(collection(db, 'Productos'),where('categoria','==',idCate))
      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      const db = getFirestore() 
      const queryCollection = query(collection(db, 'Productos'))
      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
   

 }, [idCate]);

 
    return ( 
        <>
          { greeting }
          { loading ? 
          <h2 className='ajusteCargandoDatos'>Cargando Datos...</h2> 
          :
          <ItemList productos= {productos}/>
          }
          
        </>
    )
}

export default ItemListContainer
