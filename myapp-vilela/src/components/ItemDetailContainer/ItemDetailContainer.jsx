import {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import { useParams } from 'react-router'
import {doc , getDoc, getFirestore, query ,collection , where,docs} from 'firebase/firestore' 


const ItemDetailContainer = () => {
 const [item, setItem] = useState ({})
 const [loading , setLoading] = useState(true)

 const {id} = useParams()
//  console.log(item)

//  useEffect(() => {
//    getFetch
//    .then(resp => setItem(resp.find(prod => prod.id === parseInt(id))))
//    .catch(err => console.log(err))
//    .finally(()=>setLoading(false))
//   },[id])

  useEffect(() => {
    const db = getFirestore()
    const queryDb = doc(db, 'Productos',id)
    getDoc(queryDb)
    .then(resp => setItem({ id:  resp.id, ...resp.data() }))
    .catch(err => console.log(err))
    .finally(() => setLoading(false))
  },[id])

  console.log(item)
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