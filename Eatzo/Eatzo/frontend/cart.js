import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/cart.css";
import "../css/responsive.css";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const deliveryFee = 40;
  const taxRate = 0.05; // 5%

  // Load cart from localStorage (like your old JS)
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Update quantity
  const updateQuantity = (index, change) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;

    if (updatedCart[index].quantity <= 0) {
      updatedCart.splice(index, 1);
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate values
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const taxAmount = subtotal * taxRate;
  const total = subtotal + deliveryFee + taxAmount;

  return (
    <>
      <Navbar />

      <main className="container section-gap">
        <div className="page-title">
          <h1>Your Cart</h1>
          <p>Review your selected items before checkout</p>
        </div>

        <div className="cart-layout">
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((item, index) => (
                <div className="cart-item card" key={index}>
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>

                  <div className="qty-controls">
                    <button onClick={() => updateQuantity(index, -1)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(index, 1)}>
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="cart-summary">
            <h3>Bill Summary</h3>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="summary-row">
              <span>Taxes</span>
              <span>₹{taxAmount.toFixed(2)}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>

            <a href="/checkout" className="btn checkout-btn">
              Proceed to Checkout
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Cart;