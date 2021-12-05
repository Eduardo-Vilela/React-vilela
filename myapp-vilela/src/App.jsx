import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting='Hola soy la props'/>
    </div>
  );
}

export default App;
