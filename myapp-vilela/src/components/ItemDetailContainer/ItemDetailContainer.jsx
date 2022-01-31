import {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router'
import {doc , getDoc, getFirestore} from 'firebase/firestore' 


const ItemDetailContainer = () => {
 const [item, setItem] = useState ({})
 const [loading , setLoading] = useState(true)

 const {id} = useParams()
  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'Productos',id)
    getDoc(queryDb)
    .then(resp => setItem({ id:  resp.id, ...resp.data() }))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[id])

  
  return(
      <div>
          { loading ? 
          <h2>cargando datos...</h2> 
          :
         <ItemDetail  producto={item}/>
          }
      </div>
  )
}
export default ItemDetailContainer