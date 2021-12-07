import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import gorritas from './assets/img/gorritas.jpg'

function App() {

  return (
    <div >
      <NavBar/>
      <img src={gorritas} style={{width:130,height:130}}/>
      <ItemListContainer greeting=''/>
    </div>
  );
}

export default App;
