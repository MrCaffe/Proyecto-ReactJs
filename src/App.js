// Tools
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import {Navbar} from './components/Navbar/Navbar.js';
import {Footer} from './components/Footer/Footer.js';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer.js';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer.js';
import {ItemCount} from './components/ItemCount/ItemCount.js';


function App() {


  return (
    <section>
      <Navbar/>
      <ItemListContainer/>
      {/*<ItemDetailContainer/>*/}
      <ItemCount/>

      <Footer/>


    </section>
  );
}

export default App;

