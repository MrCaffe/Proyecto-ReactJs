import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar/Navbar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';
import {PokeApi} from './components/Ejemplos/PokeApi/PokeApi.js'



function App() {

  // const producto = {
  //   id: '00001',
  //   rol: 'gaming'
  // }

  // const servicio = {
  //   id: 'aaaaa',
  //   rol: 'internet',
  // }

  const product_blocks = [7796569263521, "Blocks Emblocados", "A4", 40, "Cuadriculadas"]
  const product_tapa_carton = [77965694322224, "Cuaderno 123 Tapa Dura", "Oficio", 100, "Rayadas"]

  return (
    <div>

      <Navbar/>

      <ItemListContainer/>
     {/* <PokeApi/>*/}

    </div>
  );
}

export default App;
