import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/auth.css";
import "../css/responsive.css";

const Register = () => {
  const [formData, setFormData] = useState({
    registerName: "",
    registerEmail: "",
    registerPhone: "",
    registerPassword: "",
    registerConfirmPassword: "",
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

    // Validation
    if (
      !formData.registerName ||
      !formData.registerEmail ||
      !formData.registerPhone ||
      !formData.registerPassword ||
      !formData.registerConfirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (formData.registerPassword !== formData.registerConfirmPassword) {
      alert("Passwords do not match ❌");
      return;
    }

    // Save user (temporary localStorage)
    localStorage.setItem("user", JSON.stringify(formData));

    alert("Account created successfully 🎉");

    // Redirect to login
    window.location.href = "/login";
  };

  return (
    <>
      <Navbar />

      <main className="auth-page">
        <div className="auth-wrapper">
          {/* Left Side */}
          <div className="auth-left">
            <h1>Create Account</h1>
            <p>
              Join Eatzo and discover restaurants, deals, and quick delivery.
            </p>
            <img
              src="/images/logo/banners/banner3.jpg"
              alt="Register Banner"
            />
          </div>

          {/* Right Side */}
          <div className="auth-right">
            <div className="auth-card">
              <h2>Register</h2>
              <p className="auth-subtitle">
                Create your Eatzo account in a few steps
              </p>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    id="registerName"
                    placeholder="Enter your full name"
                    value={formData.registerName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    id="registerEmail"
                    placeholder="Enter your email"
                    value={formData.registerEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    id="registerPhone"
                    placeholder="Enter your phone number"
                    value={formData.registerPhone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    id="registerPassword"
                    placeholder="Create password"
                    value={formData.registerPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    id="registerConfirmPassword"
                    placeholder="Confirm password"
                    value={formData.registerConfirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn auth-btn">
                  Create Account
                </button>
              </form>

              <p className="auth-switch">
                Already have an account?{" "}
                <a href="/login">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Register;