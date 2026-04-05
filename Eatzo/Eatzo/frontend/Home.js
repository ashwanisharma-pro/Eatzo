import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/home.css";
import "../css/responsive.css";

const Home = () => {
  const categories = [
    "Pizza",
    "Burger",
    "Biryani",
    "Momos",
    "Chinese",
    "Desserts",
    "South Indian",
    "Beverages",
  ];

  const restaurants = [
    {
      name: "Dominos",
      img: "/images/logo/restaurants/dominos.jpg",
      desc: "Pizza, Fast Food",
      rating: "⭐ 4.3 | 25 mins",
    },
    {
      name: "KFC",
      img: "/images/logo/restaurants/kfc.jpg",
      desc: "Chicken, Burger",
      rating: "⭐ 4.2 | 30 mins",
    },
    {
      name: "Wow Momo",
      img: "/images/logo/restaurants/wow-momo.jpg",
      desc: "Momos, Snacks",
      rating: "⭐ 4.1 | 22 mins",
    },
    {
      name: "Haldirams",
      img: "/images/logo/restaurants/haldirams.jpg",
      desc: "North Indian, Sweets",
      rating: "⭐ 4.4 | 28 mins",
    },
  ];

  const foods = [
    {
      name: "Margherita Pizza",
      img: "/images/logo/foods/margherita-pizza.jpg",
      desc: "Cheesy classic delight",
      price: 249,
    },
    {
      name: "Veg Burger",
      img: "/images/logo/foods/veg-burger.jpg",
      desc: "Crunchy and loaded",
      price: 129,
    },
    {
      name: "Chicken Biryani",
      img: "/images/logo/foods/chicken-biryani.jpg",
      desc: "Spicy and flavorful",
      price: 299,
    },
    {
      name: "Gulab Jamun",
      img: "/images/logo/foods/gulab-jamun.jpg",
      desc: "Soft sweet dessert",
      price: 99,
    },
  ];

  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero-overlay">
            <div className="container hero-content">
              <div className="hero-text">
                <h1>Delicious food delivered to your doorstep</h1>
                <p>
                  Order from your favorite restaurants and enjoy fast delivery,
                  exciting offers, and a smooth ordering experience with Eatzo.
                </p>

                <div className="hero-search-box">
                  <input placeholder="Search restaurants, foods..." />
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BANNERS */}
        <section className="banner-slider container">
          <div className="banner-track">
            {["banner1.jpg", "banner2.jpg", "banner3.jpg"].map(
              (img, index) => (
                <img
                  key={index}
                  src={`/images/logo/banners/${img}`}
                  alt="banner"
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              )
            )}
          </div>
        </section>

        {/* CATEGORIES */}
        <section className="categories section-gap container">
          <div className="section-header">
            <h2>Popular Categories</h2>
            <p>Choose your favorite cravings</p>
          </div>

          <div className="category-grid">
            {categories.map((item, index) => (
              <div className="category-card" key={index}>
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* RESTAURANTS */}
        <section className="top-restaurants section-gap container">
          <div className="section-header">
            <h2>Top Restaurants</h2>
            <a href="/restaurants" className="view-all-btn">
              View All
            </a>
          </div>

          <div className="restaurant-grid">
            {restaurants.map((res, index) => (
              <div className="restaurant-card" key={index}>
                <img src={res.img} alt={res.name} />
                <div className="restaurant-info">
                  <h3>{res.name}</h3>
                  <p>{res.desc}</p>
                  <span>{res.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOODS */}
        <section className="featured-foods section-gap container">
          <div className="section-header">
            <h2>Featured Dishes</h2>
            <p>Trending meals on Eatzo</p>
          </div>

          <div className="food-grid">
            {foods.map((food, index) => (
              <div className="food-card" key={index}>
                <img src={food.img} alt={food.name} />
                <div className="food-info">
                  <h3>{food.name}</h3>
                  <p>{food.desc}</p>
                  <strong>₹{food.price}</strong>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY */}
        <section className="why-eatzo section-gap container">
          <div className="section-header">
            <h2>Why Choose Eatzo?</h2>
          </div>

          <div className="why-grid">
            {[
              {
                title: "Fast Delivery",
                desc: "Hot and fresh food delivered quickly.",
              },
              {
                title: "Best Restaurants",
                desc: "Top rated brands and local favorites.",
              },
              {
                title: "Secure Payments",
                desc: "Safe checkout experience.",
              },
              {
                title: "Exciting Offers",
                desc: "Save more with discounts.",
              },
            ].map((item, index) => (
              <div className="why-card" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;