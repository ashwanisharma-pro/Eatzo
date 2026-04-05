import React from "react";

const FoodCard = ({ image, name, description, rating, price, onAddToCart }) => {
  return (
    <div className="food-card">
      <div className="food-image">
        <img className="food-img" src={image} alt={name} />
      </div>

      <div className="food-info">
        <h3 className="food-name">{name}</h3>

        <p className="food-desc">{description}</p>

        <div className="food-rating">
          ⭐ <span className="rating">{rating}</span>
        </div>

        <div className="food-bottom">
          <span className="food-price">₹{price}</span>

          <button className="add-cart-btn" onClick={onAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;