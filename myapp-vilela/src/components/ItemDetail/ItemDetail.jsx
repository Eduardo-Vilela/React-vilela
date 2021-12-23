import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import {CartContext} from '../../Context/CartContext.jsx';

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
{/*               <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{producto.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{producto.descripcion}</Modal.Body>
                <Image variant="top" src={producto.foto} style={{width:300}} />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
             </Modal>  */}
             <Card style={{ width: '18rem' }}>
                <Card.Img/>
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>
                    {producto.descripcion}
                  </Card.Text> 
                  {!goCart ? <ItemCount props={producto.stock} onAdd={onAdd}/> 
                  : 
                  <button><Link to="/cart">Ir al carrito!</Link></button>}
                  
                </Card.Body>
            </Card>
      </>
    );
  }
  
  export default ItemDetail