import './App.css';
import Footer from './componentes/Footer/Footer';
import Upper from './componentes/Upper/Upper';
import Contenido from './componentes/Contenido/Contenido';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contacto from './componentes/Subpaginas/Contacto/Contacto';
import Compra from './componentes/Subpaginas/Compra/Compra';
import Home from './componentes/Subpaginas/Home/Home';
import Soporte from './componentes/Subpaginas/Soporte/Soporte';
import Noencontro from './componentes/Subpaginas/404/Noencontro';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Upper/>{/* Barra de navegacion */}
        <Routes>

          <Route path="/src/componentes/Subpaginas/Contacto/Contacto" element={<Contacto/>}/>

          <Route path="/" element={<Home/>}/>

          <Route path="/src/componentes/Subpaginas/Compra/Compra" element={<Compra/>}/>

          <Route path="/src/componentes/Subpaginas/Soporte/Soporte" element={<Soporte/>}/>

          <Route path="*" element={<Noencontro/>}/>

        </Routes>
      </BrowserRouter>
      <Footer/> {/* Footer */}
    </div>
  );
}

export default App;
