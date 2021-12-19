import {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getFetch } from '../../helpers/getFetch'
import { useParams } from 'react-router'

const ItemDetailContainer = () => {
 const [item, setItem] = useState ([])
 const [loading , setLoading] = useState(true)

 const {id} = useParams()
 console.log(item)

 useEffect(() => {
   getFetch
   .then(resp => setItem(resp.find(prod => prod.id === parseInt(id))))
   .catch(err => console.log(err))
   .finally(()=>setLoading(false))
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