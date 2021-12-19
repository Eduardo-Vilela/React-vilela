
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/Itemlistcontainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Demo from './components/demo/Demo.js';


function App() {

  return (
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
          </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
