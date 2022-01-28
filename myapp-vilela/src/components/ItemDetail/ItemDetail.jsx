import {Card,Button} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext.jsx';
import '../../components/ItemDetail/itemDetail.css'

function ItemDetail({producto}) {
     const [goCart, setGoCart] = useState(false);

     const {agregarAlCarrito,cartList} = useContext(CartContext)

     const onAdd = (cantidad) => {
       console.log(cantidad);
       setGoCart(true);
       agregarAlCarrito({...producto,cantidad:cantidad})
     }
     console.log(cartList)
    return (
      <>
      <div className='cardVerDetalles'>
             <Card style={{ width: '18rem' }} className='imgCard'>
               <Card.Body className='fontVerDetalle'>
                  <Card.Img  variant="top" src={producto.imagenID} />             
                    <Card.Title>{producto.title}</Card.Title>
                    <Card.Text>
                      {producto.descripcion}
                    </Card.Text> 
                    {!goCart ? <ItemCount props={producto.stock} onAdd={onAdd}/> 
                    : 
                    <Button  variant = 'dark'><Link className='linkDetail' to="/cart">Ir al carrito!</Link></Button>}
                  
                </Card.Body>
            </Card>
      </div>
      </>
    );
  }
  
  export default ItemDetail