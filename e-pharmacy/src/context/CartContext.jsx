import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Başlangıçta localStorage'dan verileri çekiyoruz
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('e_pharmacy_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Sepet her değiştiğinde localStorage'ı güncelliyoruz
  useEffect(() => {
    localStorage.setItem('e_pharmacy_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const isItemInCart = prevItems.find((item) => item.id === product.id);
      if (isItemInCart) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId 
          ? { ...item, quantity: Math.max(1, item.quantity + amount) } 
          : item
      )
    );
  };

  // Sepeti tamamen boşaltmak için (Örn: Sipariş tamamlandığında)
  const clearCart = () => setCartItems([]);

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems: cartItems.reduce((acc, item) => acc + item.quantity, 0),
    totalPrice: cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0)
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// src/context/CartContext.jsx içindeki exportları bu şekilde yap:

const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Hem Provider'ı hem Hook'u bu şekilde export et
export { CartProvider, useCart };