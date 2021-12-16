import React from 'react'
import { Card, ListGroup , ListGroupItem} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount.jsx'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer.jsx'



function Item({productos}) {
    return (
        <div className="card">
            <div key={productos.id}>
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
                 <ItemCount/>
                 <Card.Body>
                   <ItemDetailContainer/>
                 </Card.Body>
               </Card>
       </div>
        </div>
    )
}



export default Item
