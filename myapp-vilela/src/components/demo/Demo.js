import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext.jsx'
import { Card, Button} from "react-bootstrap"
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Demo = () => {
    const{ cartList,borrarItem,borrarCarrito,precioTotal} = useContext(CartContext)
    return (
        <div>
               { cartList.map(producto=>(

                   <Card>
                   <Card.Body>
                     <Card.Title>-PRODUCTO: {producto.title}</Card.Title>
                     <Card.Text>
                     {producto.descripcion} CANTIDAD: {producto.cantidad}
                     </Card.Text>
                     <Card.Text>
                     $ {producto.price}
                     </Card.Text>
                     <Button variant="danger" onClick = {()=>borrarItem(producto.id)}><BsFillTrashFill/></Button>
                   </Card.Body>
                 </Card>
                 
               ))}

               {cartList.length > 0 ? <div> {"precioTotal:$" + precioTotal()}
               <Button variant="danger" onClick = {()=>borrarCarrito()}>Vaciar Carrito</Button></div>
               :
               <div>
                   <h1>Carrito Vacio</h1>
                   <Link to = "/">Seguir Comprando</Link>
               </div>
               }
        </div>
    )
}

export default Demo
