import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext.jsx'
import { Card, Button, Form} from "react-bootstrap"
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { addDoc, collection , getFireStore } from 'firebase/firestore';

function cart(){
    const{ cartList,borrarItem,borrarCarrito,precioTotal} = useContext(CartContext)

    const generaOrden = (e) => {
      e.preventDefault()
      let orden = {}


      orden.buyer ={ nombre: 'fede', tel:'1123644',email: 'edumix22@gmail.com'}
      orden.total = precioTotal();
      orden.items = cartList.map(carItem => { 
        const id = cartProducto.id;
        const nombre = cartProducto.name;
        const precio = cartProducto.price =cartItem.cantidad;

        return {id,nombre,precio }
      })
      const db = getFireStore()
      const ordenColeccion = collection(db , 'orders')
      addDoc(ordenColeccion, orden)
      .then(resp => console.log(resp))
      
      // console.log(orden)
    }   

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
               <Form onSubmit={generaOrden}>
                 
               </Form>
               </div>
               }
        </div>
    )
}

export default cart
