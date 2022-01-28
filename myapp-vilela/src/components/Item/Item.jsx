import React from 'react'
import { Card, ListGroup , ListGroupItem, Button} from "react-bootstrap"
import {Link} from 'react-router-dom'
import '../../components/Item/item.css'


function Item({productos}) {
    return (
        <div className="card">
            <div key={productos.id}>
              <Card>
                 <Card.Img className='imgCard' variant="top" src={productos.imagenID} />
                 <Card.Body>
                   
                   <Card.Title>
                     {`${productos.title}`}
                   </Card.Title>
                   <Card.Text>
                    {/* <h4>Stock disponible :</h4>{productos.stock} */}
                   </Card.Text>
                 </Card.Body>
                 <ListGroup className="list-group-flush">
                   <ListGroupItem>
                     {productos.precio}
                     </ListGroupItem>                                          
                 </ListGroup>
               <Button variant="outline-info"><Link className='buttonDetalle' to={`/detalle/${productos.id}`}>Ver Detalle</Link></Button> 
                 <Card.Body>

                 </Card.Body>
               </Card>
       </div>
        </div>
    )
}



export default Item
