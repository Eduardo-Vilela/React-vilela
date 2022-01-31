import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card, Button} from "react-bootstrap"
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import '../../components/demo/Demo.css' 

function Cart(){
    const{ cartList,borrarItem,borrarCarrito,precioTotal } = useContext(CartContext)
   
 
    return (
        <>
          <div className ="ajustesCarrito">
               { cartList.map(producto=>(
                
                   <Card>
                   <Card.Img className='imgCard' variant="top" src={producto.imagenID} />
                   <Card.Body className='fontCarrito'>
                     <Card.Title className='fontCarrito'>PRODUCTO: {producto.title}</Card.Title>
                     <Card.Text className='fontCarrito'>
                     CANTIDAD: {producto.cantidad}
                     </Card.Text>
                     <Card.Text className='fontCarrito'>
                     $ {producto.price}
                     </Card.Text>
                     <Button  variant="danger" onClick = {()=>borrarItem(producto.id)}><BsFillTrashFill/></Button>
                   </Card.Body>
                 </Card>

               ))}
          </div>
          <div className='ajustesBotonesCarrito'>
               {cartList.length > 0 ? <div> {"Precio Total : $" + precioTotal()}
               
               <Button variant="dark" onClick = {()=>borrarCarrito()}>Vaciar Carrito</Button>
               <Button variant = "dark"><Link className='ajusteLinks' to = "/formCart">Finalizar Compra</Link></Button>
               </div>
               :
               <div>
                   <h1>Carrito Vacio</h1>
                   <Button variant = "dark"><Link className='ajustesCarrito' to = "/">Seguir Comprando</Link></Button>
               </div>
               }
          </div>
         
        </>
    )
}

export default Cart
