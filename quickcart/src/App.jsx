import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import './styles/App.css';

function App() {

  // Cart items state
  const [cart, setCart] = useState([]);

  // Cart visibility state
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Add to cart
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove item
  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  // Update quantity
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(cart.filter(item => item.id !== productId));
    } else {
      setCart(
        cart.map(item =>
          item.id === productId
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    }
  };

  // Toggle cart sidebar
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  // Total items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Total price
  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="app">

      <Header
        toggleCart={toggleCart}
        cartCount={getTotalItems()}
      />

      <main className="main-content">
        <ProductList
          products={products}
          addToCart={addToCart}
        />
      </main>

      {isCartOpen && (
        <CartSidebar
          cart={cart}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          totalPrice={getTotalPrice()}
          toggleCart={toggleCart}
        />
      )}

    </div>
  );
}

export default App;