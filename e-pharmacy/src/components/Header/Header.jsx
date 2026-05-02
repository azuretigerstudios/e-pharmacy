import { Link } from 'react-router-dom';
import './Header.css'; // Header'a özel stiller için

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">E-Pharmacy</Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medicine">Medicine</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <Link to="/login" className="btn-login">Login</Link>
      </div>
    </header>
  );
};

export default Header;