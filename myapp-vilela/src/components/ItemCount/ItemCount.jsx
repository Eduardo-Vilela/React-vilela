import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import '../../components/ItemCount/itemCount.css'
const ItemCount = ({props, onAdd}) => {
    // const { maximo, inicial} = props
       const inicial = 1;
       const maximo = 5;
    const [ value, setValue] = useState(inicial);
    const handleSuma = () => {
        value < maximo ? setValue(value => value + 1) : alert('STOCK MAXIMO')
    }
    const handleResta = () => {
        value > inicial ? setValue(value => value  - 1) : alert('STOCK MINIMO')
    }
    return (
        <div className='ajusteParteDetalles'>
            <h1>{value}</h1>
            <Button variant="success" onClick={handleSuma}>+</Button>{' '}
            <Button variant="danger" onClick={handleResta}>-</Button>{' '}
            <br/>
            <Button disabled={value === 0} onClick={() => onAdd(value)}variant="outline-info">AGREGAR AL CARRITO</Button>{' '}
        </div>
    )
}
export default ItemCount