import {useEffect,useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getOneProduct } from '../../helpers/getOneProduct'

const ItemDetailContainer = () => {
 const [item, setItem] = useState ([])
 console.log(item)

 useEffect(() => {
    getOneProduct
  .then(resp => setItem(resp))
  .catch(err => console.log(err))
  })
  return(
      <div>
         <ItemDetail  producto={item}/>
      </div>
  )
}
export default ItemDetailContainer