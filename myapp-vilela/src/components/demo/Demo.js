import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Card, Button} from "react-bootstrap"
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { addDoc, collection , getFirestore ,Timestamp } from 'firebase/firestore';
import DatosOrden from '../DatosOrden/DatosOrden';
import '../../components/demo/Demo.css' 

function Cart(){
    const{ cartList,borrarItem,borrarCarrito,precioTotal } = useContext(CartContext)
    const [idOrden, setIdOrden] = useState("")
    const [dataForm, setDataForm] = useState({
      name:"" , email:"",phone:""
    })

    const handleChange = (e) => {
      setDataForm({
        ...dataForm,
        [e.target.name]:e.target.value
      })
    }
    
  console.log(dataForm)
    const generarOrden = (e) => {
      e.preventDefault()

      let orden = {}
      orden.date = Timestamp.fromDate(new Date())
      orden.buyer =dataForm
      orden.total = precioTotal();
      orden.items = cartList.map(cartProducto => { 
        const id = cartProducto.id;
        const nombre = cartProducto.title;
        const precio = cartProducto.price * cartProducto.cantidad;
        const cantidad = cartProducto.cantidad;

        return {id,nombre,precio,cantidad }
      })
      // const db = getFirestore()
      // const ordenColleccion = collection(db , 'orders')
      // addDoc(ordenColleccion, orden)
      // .then(resp => console.log(resp))
      
      //  console.log(orden)
      const db = getFirestore();
        const ordenCollection = collection(db, 'Ordenes')
        addDoc(ordenCollection, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
        console.log(orden)
    }   

    return (
        <div className ="ajustesCarrito">
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

               {cartList.length > 0 ? <div> {"Precio Total : $" + precioTotal()}
               <Button variant="danger" onClick = {()=>borrarCarrito()}>Vaciar Carrito</Button></div>
               :
               <div>
                   <h1>Carrito Vacio</h1>
                   <Button variant = "success"><Link className='ajustesCarrito' to = "/">Seguir Comprando</Link></Button>
               </div>
               }
               <br/>
               <form 
                  onSubmit={generarOrden}
                  onChange={handleChange}
               >
                 <input 
                 type='text'
                 name='name'
                 placeholder='name'
                 value={dataForm.name}
                 /><br/>
                 <input 
                 type='text'
                 name='phone'
                 placeholder='phone'
                 value={dataForm.phone}
                 /><br/>
                 <input 
                 type='text'
                 name='email'
                 placeholder='email'
                 value={dataForm.phone}
                 /><br/>
               </form>  
               <Button onClick = {generarOrden}> Generar Orden</Button>              
        </div>
    )
}

export default Cart
