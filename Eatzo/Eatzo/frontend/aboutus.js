import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/profile.css";
import "../css/responsive.css";

const AboutUs = () => {
  return (
    <>
      <Navbar />

      <main>
        <section className="info-hero">
          <div className="container">
            <h1>About Eatzo</h1>
            <p>
              Fast, fresh, and reliable food delivery experience for everyone.
            </p>
          </div>
        </section>

        <section className="container section-gap">
          <div className="info-block card">
            <h2>Who We Are</h2>
            <p>
              Eatzo is a modern food ordering platform designed to connect users
              with their favorite restaurants in a simple and fast way.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card card">
              <h3>Our Mission</h3>
              <p>
                To deliver delicious meals with speed, trust, and convenience.
              </p>
            </div>

            <div className="info-card card">
              <h3>Our Vision</h3>
              <p>
                To become a reliable digital food companion for everyone.
              </p>
            </div>

            <div className="info-card card">
              <h3>Our Promise</h3>
              <p>
                Easy ordering, secure payments, and great user experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutUs;