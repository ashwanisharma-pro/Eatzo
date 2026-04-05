import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/profile.css";
import "../css/responsive.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    contactName: "",
    contactEmail: "",
    contactMessage: "",
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

    alert("Message sent successfully! ✅");

    // Reset form
    setFormData({
      contactName: "",
      contactEmail: "",
      contactMessage: "",
    });
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="info-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>We would love to hear from you. Reach out anytime.</p>
          </div>
        </section>

        <section className="container section-gap">
          <div className="contact-layout">
            {/* Contact Info */}
            <div className="contact-card card">
              <h2>Get in Touch</h2>
              <p>Email: support@eatzo.com</p>
              <p>Phone: +91 98765 43210</p>
              <p>Address: Alwar, Rajasthan, India</p>
            </div>

            {/* Contact Form */}
            <div className="contact-card card">
              <h2>Send Message</h2>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    id="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Your Email</label>
                  <input
                    type="email"
                    id="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    id="contactMessage"
                    rows="5"
                    value={formData.contactMessage}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;