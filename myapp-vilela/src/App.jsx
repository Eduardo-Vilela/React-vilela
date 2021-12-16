
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/Itemlistcontainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';


function App() {

  return (
    <BrowserRouter>
      <div >
        <NavBar/>
        <Routes>
          <Route
          exact 
          path="/productos" 
          element={<ItemListContainer greeting=''/>}/>
          <Route
          exact  
          path="/categoria/:idCate" 
          element={<ItemListContainer greeting=''/>}/>
         <Route
          exact  
          path="/detalle/" 
          element={<ItemListContainer greeting=''/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
