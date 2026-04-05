import React from "react";

const RestaurantCard = ({ image, name, cuisine, rating, deliveryTime }) => {
  return (
    <div className="restaurant-card">

      <div className="restaurant-image">
        <img src={image} alt={name} />
      </div>

      <div className="restaurant-info">
        <h3 className="restaurant-name">{name}</h3>

        <p className="restaurant-cuisine">{cuisine}</p>

        <div className="restaurant-details">
          <span className="rating">⭐ {rating}</span>
          <span className="delivery-time">{deliveryTime} mins</span>
        </div>
      </div>

    </div>
  );
};

export default RestaurantCard;