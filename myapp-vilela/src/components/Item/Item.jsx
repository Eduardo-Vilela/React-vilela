import React from 'react'
import { Card, ListGroup , ListGroupItem,Button  } from "react-bootstrap"


function Item({productos}) {
    return (
        <div>
            <div key={productos.id} clasName='col-md-4'>
              <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={productos.foto} />
                 <Card.Body>
                   
                   <Card.Title>
                     {`${productos.title} - ${productos.id}`}
                   </Card.Title>
                   <Card.Text>
                    {productos.stock}
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   <ListGroupItem>
                     {productos.precio}
                     </ListGroupItem>                                          
                 </ListGroup>
                 <Card.Body>
                 <Button variant="success">Comprar</Button>{' '}
                 <Button variant="danger">Eliminar</Button>
                 </Card.Body>
               </Card>
       
       
       
       
       
       
       </div>
        </div>
    )
}



export default Item
