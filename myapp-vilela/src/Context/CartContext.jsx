import {createContext,useState} from 'react'

 export const CartContext = createContext([])

 function CartContextProvider({children}) {
    const [cartList, setCartList] =useState([])

     function agregarAlCarrito(item) {
    const index = cartList.findIndex(i => i.id === item.id)//pos    -1
    console.log(index)
    if (index > -1) {
      const oldQy = cartList[index].cantidad

      cartList.splice(index, 1)

      setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])

    } else {
      setCartList([...cartList, item])
    }
        }

        const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.price) , 0)
        }

        const borrarItem = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
        }

        function borrarCarrito() {
            setCartList([])
        }
     return (
         <CartContext.Provider value={{
            cartList,
            agregarAlCarrito, 
            precioTotal,
            borrarItem,
            borrarCarrito,
         }}>
             { children }
         </CartContext.Provider>
     )
     
 }
 
 export default CartContextProvider