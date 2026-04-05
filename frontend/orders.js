import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/orders.css";
import "../css/responsive.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  // Load orders (from localStorage or API later)
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <>
      <Navbar />

      <main className="container section-gap">
        <div className="page-title">
          <h1>My Orders</h1>
          <p>Track your current and past orders</p>
        </div>

        <div className="orders-container">
          {orders.length === 0 ? (
            <p>No orders found</p>
          ) : (
            orders.map((order, index) => (
              <div className="order-card card" key={index}>
                <div className="order-header">
                  <h3>Order #{order.id}</h3>
                  <span className={`status ${order.status}`}>
                    {order.status}
                  </span>
                </div>

                <p><strong>Restaurant:</strong> {order.restaurant}</p>

                <div className="order-items">
                  {order.items.map((item, i) => (
                    <div key={i} className="order-item">
                      {item.name} × {item.quantity}
                    </div>
                  ))}
                </div>

                <div className="order-footer">
                  <strong>Total: ₹{order.total}</strong>
                  <a href="/tracking" className="btn small-btn">
                    Track Order
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Orders;