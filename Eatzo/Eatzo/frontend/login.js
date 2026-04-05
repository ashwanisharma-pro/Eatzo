import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/auth.css";
import "../css/responsive.css";

const Login = () => {
  const [formData, setFormData] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation (you can connect backend later)
    if (!formData.loginEmail || !formData.loginPassword) {
      alert("Please fill all fields");
      return;
    }

    alert("Login successful ✅");

    // Example: store user login
    localStorage.setItem("user", JSON.stringify(formData));
  };

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <div className="auth-wrapper">
          {/* Left Side */}
          <div className="auth-left">
            <h1>Welcome Back</h1>
            <p>
              Login to continue ordering your favorite food with Eatzo.
            </p>
            <img
              src="/images/logo/banners/banner2.jpg"
              alt="Login Banner"
            />
          </div>

          {/* Right Side */}
          <div className="auth-right">
            <div className="auth-card">
              <h2>Login</h2>
              <p className="auth-subtitle">
                Enter your details to access your account
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    id="loginEmail"
                    placeholder="Enter your email"
                    value={formData.loginEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    id="loginPassword"
                    placeholder="Enter your password"
                    value={formData.loginPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn auth-btn">
                  Login
                </button>
              </form>

              <p className="auth-switch">
                Don't have an account?{" "}
                <a href="/register">Register here</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Login;