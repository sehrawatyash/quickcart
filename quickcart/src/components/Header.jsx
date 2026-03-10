import React from 'react';
import '../styles/Header.css';

function Header({ toggleCart, cartCount }) {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-left">
          <h1 className="header-title">🛒 QuickCart</h1>
          <p className="header-subtitle">Your one-stop shop for everything</p>
        </div>

        <div className="cart-icon" onClick={toggleCart}>
          🛍️
          <span className="cart-count">{cartCount}</span>
        </div>

      </div>
    </header>
  );
}

export default Header;