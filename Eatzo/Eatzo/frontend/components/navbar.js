import React from "react";
// If using React Router, uncomment below
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">

        <a href="/" className="logo-wrap">
          <img src="images/logo/eatzo-logo.png?v=2" alt="Eatzo Logo" />
          <h2>Eatzo</h2>
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/orders">Orders</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="nav-actions">
          <a href="/cart" className="login-btn">Cart</a>
          <a href="/login" className="login-btn">Login</a>
          <a href="/register" className="register-btn">Register</a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;