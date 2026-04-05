const restaurantsFullData = {
  1: {
    id: 1,
    name: "Dominos",
    cuisine: "Pizza, Fast Food",
    rating: 4.3,
    deliveryTime: "25 mins",
    costForTwo: "₹500 for two",
    image: "images/logo/restaurants/dominos.jpg?v=2",
    foods: [
      { id: 101, name: "Margherita Pizza", price: 249, desc: "Classic cheese pizza", image: "images/logo/foods/margherita-pizza.jpg?v=2" },
      { id: 102, name: "Farmhouse Pizza", price: 329, desc: "Loaded with fresh veggies", image: "images/logo/foods/farmhouse-pizza.jpg?v=2" },
      { id: 103, name: "Paneer Tikka Pizza", price: 349, desc: "Spicy paneer topping", image: "images/logo/foods/paneer-tikka-pizza.jpg?v=2" },
      { id: 104, name: "Cheese Burst Pizza", price: 399, desc: "Extra cheesy indulgence", image: "images/logo/foods/cheese-burst-pizza.jpg?v=2" }
    ]
  },
  3: {
    id: 3,
    name: "KFC",
    cuisine: "Chicken, Burger",
    rating: 4.2,
    deliveryTime: "28 mins",
    costForTwo: "₹600 for two",
    image: "images/logo/restaurants/kfc.jpg?v=2",
    foods: [
      { id: 201, name: "Chicken Burger", price: 199, desc: "Crispy chicken burger", image: "images/logo/foods/chicken-burger.jpg?v=2" },
      { id: 202, name: "Cheese Burger", price: 179, desc: "Cheesy burger delight", image: "images/logo/foods/cheese-burger.jpg?v=2" },
      { id: 203, name: "French Fries", price: 99, desc: "Golden crispy fries", image: "images/logo/foods/french-fries.jpg?v=2" },
      { id: 204, name: "Peri Peri Fries", price: 119, desc: "Spicy fries combo", image: "images/logo/foods/peri-peri-fries.jpg?v=2" }
    ]
  },
  6: {
    id: 6,
    name: "Wow Momo",
    cuisine: "Momos, Snacks",
    rating: 4.1,
    deliveryTime: "20 mins",
    costForTwo: "₹400 for two",
    image: "images/logo/restaurants/wow-momo.jpg?v=2",
    foods: [
      { id: 301, name: "Veg Momos", price: 129, desc: "Steamed veg momos", image: "images/logo/foods/veg-momos.jpg?v=2" },
      { id: 302, name: "Paneer Momos", price: 149, desc: "Paneer stuffed momos", image: "images/logo/foods/paneer-momos.jpg?v=2" },
      { id: 303, name: "Chicken Momos", price: 169, desc: "Juicy chicken filling", image: "images/logo/foods/chicken-momos.jpg?v=2" },
      { id: 304, name: "Fried Momos", price: 159, desc: "Crispy fried momos", image: "images/logo/foods/fried-momos.jpg?v=2" }
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const restaurantId = getQueryParam("id") || "1";
  const restaurant = restaurantsFullData[restaurantId] || restaurantsFullData[1];

  const restaurantBanner = document.getElementById("restaurantBanner");
  const foodItemsGrid = document.getElementById("foodItemsGrid");

  if (restaurantBanner) {
    restaurantBanner.innerHTML = `
      <div class="restaurant-banner-image">
        <img src="${restaurant.image}" alt="${restaurant.name}">
      </div>
      <div class="restaurant-banner-text">
        <h1>${restaurant.name}</h1>
        <p>${restaurant.cuisine}</p>
        <div class="restaurant-stats">
          <span>⭐ ${restaurant.rating}</span>
          <span>${restaurant.deliveryTime}</span>
          <span>${restaurant.costForTwo}</span>
        </div>
      </div>
    `;
  }

  if (foodItemsGrid) {
    foodItemsGrid.innerHTML = restaurant.foods.map(food => `
      <div class="food-item-card">
        <img src="${food.image}" alt="${food.name}">
        <div class="food-item-info">
          <h3>${food.name}</h3>
          <p>${food.desc}</p>
          <div class="food-item-bottom">
            <strong>₹${food.price}</strong>
            <button class="add-cart-btn" data-food-id="${food.id}">Add</button>
          </div>
        </div>
      </div>
    `).join("");

    const buttons = document.querySelectorAll(".add-cart-btn");
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const foodId = Number(button.getAttribute("data-food-id"));
        const selectedFood = restaurant.foods.find(item => item.id === foodId);
        if (selectedFood) addToCart(selectedFood);
      });
    });
  }
});

function addToCart(food) {
  let cart = getFromLocalStorage("eatzo_cart") || [];
  const existingItem = cart.find(item => item.id === food.id);

  if (existingItem) {
    existingItem.qty += 1;
  } else {
    cart.push({ ...food, qty: 1 });
  }

  saveToLocalStorage("eatzo_cart", cart);
  showToast(`${food.name} added to cart`);
}