import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { FaHome, FaUser, FaBtc } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Home from './components/Home';
import Sobre from './components/Sobre';
import Servicos from './components/Servicos';
import Contato from './components/Contato';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul className='lista'>
          <li className='lista' > <Link to='/'> <FaHome /> Home </Link></li>
          <li className='lista'> <Link to='/sobre'> <FaUser />Sobre </Link></li>
          <li className='lista'> <Link to="servicos"> <FaBtc />Serviços </Link> </li>
          <li className='lista'> <Link to="contato"> <MdEmail />Contato </Link></li>
        </ul>
        
        

<Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/sobre" element={<Sobre />}></Route>
  <Route path="/servicos" element={<Servicos />}></Route>
  <Route path="/contato" element={<Contato />}></Route>



</Routes>

      </BrowserRouter>

      <p className='rodape'>Todos os direitos reservados </p>


    </div>
  );
}

export default App;
