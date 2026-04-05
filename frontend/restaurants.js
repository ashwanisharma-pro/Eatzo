import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "../css/style.css";
import "../css/navbar.css";
import "../css/footer.css";
import "../css/restaurants.css";
import "../css/responsive.css";

const Restaurants = () => {
  const [search, setSearch] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [sort, setSort] = useState("");

  const restaurantData = [
    {
      name: "Dominos",
      cuisine: "Pizza",
      rating: 4.3,
      deliveryTime: 25,
      cost: 500,
      img: "/images/logo/restaurants/dominos.jpg",
    },
    {
      name: "KFC",
      cuisine: "Burger",
      rating: 4.2,
      deliveryTime: 30,
      cost: 400,
      img: "/images/logo/restaurants/kfc.jpg",
    },
    {
      name: "Wow Momo",
      cuisine: "Momos",
      rating: 4.1,
      deliveryTime: 22,
      cost: 300,
      img: "/images/logo/restaurants/wow-momo.jpg",
    },
    {
      name: "Haldirams",
      cuisine: "North Indian",
      rating: 4.4,
      deliveryTime: 28,
      cost: 450,
      img: "/images/logo/restaurants/haldirams.jpg",
    },
  ];

  // Filter + Search
  let filtered = restaurantData.filter((res) => {
    return (
      res.name.toLowerCase().includes(search.toLowerCase()) &&
      (cuisine === "" || res.cuisine === cuisine)
    );
  });

  // Sorting
  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sort === "deliveryTime") {
    filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
  } else if (sort === "costLowHigh") {
    filtered.sort((a, b) => a.cost - b.cost);
  } else if (sort === "costHighLow") {
    filtered.sort((a, b) => b.cost - a.cost);
  }

  return (
    <>
      <Navbar />

      <main className="restaurants-page">
        {/* Hero */}
        <section className="page-hero small-hero">
          <div className="container">
            <h1>Explore Restaurants</h1>
            <p>Find the best food near you</p>
          </div>
        </section>

        <section className="container section-gap">
          {/* Filters */}
          <div className="filter-bar">
            <input
              type="text"
              placeholder="Search restaurant or cuisine..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <select onChange={(e) => setCuisine(e.target.value)}>
              <option value="">All Cuisines</option>
              <option value="Pizza">Pizza</option>
              <option value="Burger">Burger</option>
              <option value="Biryani">Biryani</option>
              <option value="Momos">Momos</option>
              <option value="North Indian">North Indian</option>
              <option value="Chinese">Chinese</option>
            </select>

            <select onChange={(e) => setSort(e.target.value)}>
              <option value="">Sort By</option>
              <option value="rating">Rating</option>
              <option value="deliveryTime">Delivery Time</option>
              <option value="costLowHigh">Cost: Low to High</option>
              <option value="costHighLow">Cost: High to Low</option>
            </select>
          </div>

          {/* Restaurant List */}
          <div className="restaurant-list-grid">
            {filtered.length === 0 ? (
              <p>No restaurants found</p>
            ) : (
              filtered.map((res, index) => (
                <div className="restaurant-card card" key={index}>
                  <img src={res.img} alt={res.name} />

                  <div className="restaurant-info">
                    <h3>{res.name}</h3>
                    <p>{res.cuisine}</p>
                    <span>
                      ⭐ {res.rating} | {res.deliveryTime} mins
                    </span>
                    <p>₹{res.cost} for two</p>

                    <a href="/restaurant" className="btn small-btn">
                      View Menu
                    </a>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Restaurants;