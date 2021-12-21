import {Card} from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount';
import React,{useState} from 'react'

function ItemDetail({producto}) {
     const [goCart, setGoCart] = useState(false);

     const onAdd = (cantidad) => {
       console.log(cantidad);
       setGoCart(true);
     }
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
                  <button>Ir al carrito!</button>}
                  
                </Card.Body>
            </Card>
      </>
    );
  }
  
  export default ItemDetail