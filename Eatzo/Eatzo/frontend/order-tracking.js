import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/tracking.css";
import "../css/responsive.css";

const Tracking = () => {
  const [step, setStep] = useState(2); // current step

  const steps = [
    {
      title: "Order Confirmed",
      desc: "Your order has been placed successfully.",
    },
    {
      title: "Preparing",
      desc: "The restaurant is preparing your food.",
    },
    {
      title: "Out for Delivery",
      desc: "Your order is on the way.",
    },
    {
      title: "Delivered",
      desc: "Your order has reached your location.",
    },
  ];

  // Simulate tracking update
  const updateTracking = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  return (
    <>
      <Navbar />

      <main className="container section-gap">
        <div className="tracking-header">
          <h1>Track Your Order</h1>
          <p>See live status of your delivery</p>
        </div>

        <div className="tracking-box">
          <div className="order-meta">
            <h2>Order #EZ1024</h2>
            <p>Restaurant: Dominos</p>
          </div>

          <div className="tracking-steps">
            {steps.map((item, index) => (
              <div
                key={index}
                className={`track-step ${index < step ? "active" : ""}`}
              >
                <span>{index + 1}</span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="btn" onClick={updateTracking}>
            Update Tracking
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Tracking;