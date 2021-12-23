import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext.jsx'

const Demo = () => {
    const{ cartList} = useContext(CartContext)
    return (
        <div>
            <h4>
               { cartList.map(producto=><ul>{producto.name}</ul>)}
            </h4>
        </div>
    )
}

export default Demo
