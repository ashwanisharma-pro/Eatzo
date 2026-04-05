import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          <div className="footer-brand">
            <img src="images/logo/eatzo-logo.png?v=2" alt="Eatzo Logo" />
            <h3>Eatzo</h3>
            <p>
              Eatzo makes food ordering easy, fast, and delicious. Explore your
              favorite restaurants and get your meals delivered quickly.
            </p>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/restaurants">Restaurants</a></li>
              <li><a href="/orders">Orders</a></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
              <li><a href="/profile">Profile</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>Email: support@eatzo.com</li>
              <li>Phone: +91 98765 43210</li>
              <li>Location: Alwar, Rajasthan</li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Eatzo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;