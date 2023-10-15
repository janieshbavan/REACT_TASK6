import { HashRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { About, Contact, Home, Info } from './components/Navcomponents';
import './components/style.css';

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/info" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
