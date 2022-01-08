import {useEffect, useState} from 'react'
import {getFetch} from "../../helpers/getFetch.js"
import ItemList from "../ItemList/ItemList.jsx"
import {useParams} from 'react-router-dom'
import {doc , getDocs, getFirestore, query ,collection , where,docs} from 'firebase/firestore' 

function ItemListContainer(  {greeting} )  {

  const [productos, setProductos] = useState([])
  const [loading , setLoading] = useState(true)
    
  const {idCate} = useParams()
  // useEffect(() => {
    // if (idCate) {
      // getFetch
      // .then(resp => setProductos(resp.filter(prod => prod.categorias === idCate)))
      // .catch(err => console.log(err))
      // .finally(()=>setLoading(false))
    // } else{
      // getFetch
      // .then(resp => setProductos(resp))
      // .catch(err => console.log(err))
      // .finally(()=>setLoading(false))
    // }
  // },[idCate])

  const db = getFirestore() 

   useEffect(() => {
    if (idCate) {
      const queryCollection = query(collection(db, 'Productos'),where('categoria','==',idCate))
      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    } else {
      const queryCollection = query(collection(db, 'Productos'))
      getDocs(queryCollection)
      .then(resp => setProductos( resp.docs.map(prod => ({id: prod.id, ...prod.data() }))))
      .catch(err => console.log(err))
      .finally(() => setLoading(false))
    }
   

 }, [idCate]);

 console.log(productos)
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
