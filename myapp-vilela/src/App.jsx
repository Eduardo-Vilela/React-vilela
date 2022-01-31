import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/Itemlistcontainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Demo from './components/demo/Demo.js';
import CartContextProvider from './Context/CartContext.jsx';
import { FormCart } from './components/FormCart/FormCart.jsx';


function App() {

  return (
    <CartContextProvider>
    <BrowserRouter>
      <div >
          <NavBar/>
          <Routes>
            <Route
            exact 
            path="/" 
            element={<ItemListContainer greeting=''/>}/>
            <Route
            exact  
            path="/categoria/:idCate" 
            element={<ItemListContainer greeting=''/>}/>
           <Route
            exact  
            path="/detalle/:id" 
            element={<ItemDetailContainer />}/>
           <Route
            exact  
            path="/cart" 
            element={<Demo />}/>
            <Route
            exact
            path="/formCart"
            element={<FormCart/>}/>
          </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
