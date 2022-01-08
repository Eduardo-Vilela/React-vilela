import React from 'react'
import { Card, ListGroup , ListGroupItem} from "react-bootstrap"
import {Link} from 'react-router-dom'


function Item({productos}) {
    return (
        <div className="card">
            <div key={productos.id}>
              <Card style={{ width: '18rem' }}>
                 <Card.Img variant="top" src={productos.foto} />
                 <Card.Body>
                   
                   <Card.Title>
                     {`${productos.title}`}
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
               <Link to={`/detalle/${productos.id}`}>Ver Detalle</Link>  
                 <Card.Body>

                 </Card.Body>
               </Card>
       </div>
        </div>
    )
}



export default Item
