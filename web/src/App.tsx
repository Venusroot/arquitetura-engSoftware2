import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './Principal';
import Sobre from './Sobre';
import Projetos from './Projetos';

function App() {
  return (
    <BrowserRouter>
      {/* Configuração das páginas/módulos que serão trocados dinamicamente */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Sobre" element={<Sobre />} />
         <Route path="/Projetos" element={<Projetos/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;