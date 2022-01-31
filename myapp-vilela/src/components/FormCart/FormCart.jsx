import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import { addDoc, collection , getFirestore ,Timestamp } from 'firebase/firestore';
import { Button } from 'react-bootstrap';
import '../../components/FormCart/FormCart.css'
import swal from 'sweetalert'


export const FormCart = () => {


const{ cartList,borrarCarrito,precioTotal } = useContext(CartContext)

const [dataForm, setDataForm] = useState({
  name:"" , email:"",phone:""
})

const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]:e.target.value
    })
  }

 const generarOrden = (e) => {
    e.preventDefault()

    let orden = {}
    orden.date = Timestamp.fromDate(new Date())
    orden.buyer =dataForm
    orden.total = precioTotal();
    orden.items = cartList.map(cartProducto => { 
      const id = cartProducto.id;
      const nombre = cartProducto.title;
      const precio = cartProducto.price * cartProducto.cantidad;
      const cantidad = cartProducto.cantidad;

      return {id,nombre,precio,cantidad }
    })
    const db = getFirestore();
      const ordenCollection = collection(db, 'Ordenes')
      addDoc(ordenCollection, orden)
      .then(resp =>{swal("Gracias por su compra", `Su Numero de orden es: ${resp.id}`)})
      .catch(err => console.log(err))
      .finally(()=>{
          borrarCarrito()
          setDataForm({
              name:"",
              email:"",
              phone:"",
              direccion:"",
          })
      })
      
  }   
  return (
    <div className='ordenFormulario'>          
        <form 
                    onSubmit={generarOrden}
                    onChange={handleChange}
        >       <br/>  
        <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                    value={dataForm.name}
                    required
        />      <br/> 
        <input 
                    type='text'
                    name='phone'
                    placeholder='Phone'
                    value={dataForm.phone}
                    required
        />
                <br/>
        <input 
                    type='email'
                    name='email'
                    placeholder='Email'
                    value={dataForm.email}
                    required
        />
                <br/>
        <input 
                    type='Direccion'
                    name='Direccion'
                    placeholder='Direccion'
                    value={dataForm.direccion}
                    required
        />
        <Button className='buttonForm' variant = "dark" type='submit'> Generar Orden</Button>    
        </form>            
</div>    
  )}