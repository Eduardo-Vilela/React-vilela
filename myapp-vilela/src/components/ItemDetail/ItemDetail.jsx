import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

function ItemDetail({producto}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
      {producto.map((Producto1)=>
              <div key={Producto1.id}>
              <Button variant="primary" onClick={handleShow}>
                Detalles
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{Producto1.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{Producto1.descripcion}</Modal.Body>
                <Image variant="top" src={Producto1.foto} style={{width:300}} />
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
              </div>
     
      )}
        
      </>
    );
  }
  
  export default ItemDetail