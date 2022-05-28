import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './components/Navbar/Navbar.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';
// import {Products} from './components/Products/Products.js';


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

   
      <ItemListContainer id={product_blocks[0]} name={product_blocks[1]} type={product_blocks[2]} cant={product_blocks[3]} style={product_blocks[4]}/>
      <ItemListContainer id={product_tapa_carton[0]} name={product_tapa_carton[1]} type={product_tapa_carton[2]} cant={product_tapa_carton[3]} style={product_tapa_carton[4]}/>

      {/*<Products titulo={producto.id} content={producto.rol}/>
      <Products titulo={servicio.id} content={servicio.rol}/>*/}
    </div>
  );
}

export default App;
