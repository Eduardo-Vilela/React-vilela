import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';

const ItemCount = ({props, onAdd}) => {

    const { maximo, inicial} = props
     
    const [ value, setValue] = useState(props.inicial);

    const handleSuma = () => {
        value < maximo ? setValue(value + 1) : alert('STOCK MAXIMO')
    }

    const handleResta = () => {
        value > inicial ? setValue(value - 1) : alert('STOCK MINIMO')
    }

    return (
        <div>
            <h1>{1}</h1>
            <Button variant="success" onClick={handleSuma}>+</Button>{' '}
            <Button variant="danger" onClick={handleResta}>-</Button>{' '}
            <Button disabled={value === 0} onClick={() => onAdd(value)}variant="outline-info">AGREGAR AL CARRITO</Button>{' '}
        </div>
    )
}

export default ItemCount
