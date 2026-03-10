import React from "react";

function Cart({ cart, removeFromCart, updateQuantity, totalPrice, toggleCart }) {
  return (
    <div className="cart">

      <button onClick={toggleCart}>Close</button>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">

            <h4>{item.name}</h4>
            <p>${item.price}</p>

            <div>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>

              <span>{item.quantity}</span>

              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>

            <button onClick={() => removeFromCart(item.id)}>
              Remove
            </button>

          </div>
        ))
      )}

      <h3>Total: ${totalPrice}</h3>

    </div>
  );
}

export default Cart;