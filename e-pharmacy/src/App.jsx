import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext'; // Import edildi
import './styles/global.css';
import Home from './pages/Home/Home';
import Medicine from './pages/Medicine/Medicine';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <CartProvider> {/* Tüm uygulama sepet verisine erişebilir */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/medicine" element={<Medicine />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;