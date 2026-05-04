import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Header.css';

const Header = () => {
  const { cartItems } = useCart();
  
  // Toplam ürün adedini hesapla
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Pharmacy</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medicine">Medicine</Link></li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart ({totalItems})
            </Link>
          </li>
        </ul>
      </nav>
      {/* Auth kısımları... */}
    </header>
  );
};

export default Header;