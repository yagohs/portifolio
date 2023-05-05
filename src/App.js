
import { BrowserRouter, Route, Routes } from 'react-router-dom/dist';

import './App.css';

// Components
import NavBar from './components/NavBar';
import Footer from './components/Footer'

//Pages
import Home from './pages/Home'
import Projetos from './pages/Projetos'
import Habilidade from './pages/Habilidade'

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar />
            <div className='container'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/habilidades' element={<Habilidade />} />
                <Route path='/projeto' element={<Projetos />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
