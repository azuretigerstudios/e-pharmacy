import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.css'; // Stil dosyanı import et
import Home from './pages/Home/Home';
import Medicine from './pages/Medicine/Medicine';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header /> {/* Her sayfada görünecek */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicine" element={<Medicine />} />
        {/* Diğer rotalar: /cart, /login vb. */}
      </Routes>
      <Footer /> {/* Her sayfada görünecek */}
    </Router>
  );
}

export default App;