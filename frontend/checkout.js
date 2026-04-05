import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/checkout.css";
import "../css/responsive.css";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    addressLine: "",
    city: "",
    pincode: "",
    paymentMethod: "",
  });

  // Load cart data
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Calculate total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    alert("Order Placed Successfully! 🎉");

    // Clear cart
    localStorage.removeItem("cart");
    setCartItems([]);

    // Reset form
    setFormData({
      fullName: "",
      phoneNumber: "",
      addressLine: "",
      city: "",
      pincode: "",
      paymentMethod: "",
    });
  };

  return (
    <>
      <Navbar />

      <main className="container section-gap">
        <div className="page-title">
          <h1>Checkout</h1>
          <p>Fill your delivery and payment details</p>
        </div>

        <div className="checkout-layout">
          {/* Form */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                id="addressLine"
                rows="4"
                value={formData.addressLine}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  id="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI</option>
                <option value="Card">Credit / Debit Card</option>
              </select>
            </div>

            <button type="submit" className="btn place-order-btn">
              Place Order
            </button>
          </form>

          {/* Summary */}
          <div className="checkout-summary">
            <h3>Order Summary</h3>

            {cartItems.length === 0 ? (
              <p>No items in cart</p>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="summary-row">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </div>
              ))
            )}

            <hr />

            <div className="summary-row">
              <span>Total Payable</span>
              <strong>₹{total}</strong>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Checkout;