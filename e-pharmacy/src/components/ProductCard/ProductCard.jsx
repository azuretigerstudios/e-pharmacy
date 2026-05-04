import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <img src="https://via.placeholder.com/150" alt={product.name} />
      </div>
      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="category">{product.category}</p>
        <p className="price">${product.price}</p>
        <button 
          className="add-to-cart-btn" 
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;