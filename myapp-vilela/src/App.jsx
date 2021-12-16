import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/Itemlistcontainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div >
      <NavBar/>
      <ItemListContainer greeting=''/>
    </div>
  );
}

export default App;
