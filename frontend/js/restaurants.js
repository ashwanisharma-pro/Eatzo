const restaurantsData = [
  {
    id: 1,
    name: "Dominos",
    cuisine: "Pizza",
    rating: 4.3,
    deliveryTime: 25,
    cost: 250,
    image: "images/logo/restaurants/dominos.jpg?v=2"
  },
  {
    id: 2,
    name: "Pizza Hut",
    cuisine: "Pizza",
    rating: 4.1,
    deliveryTime: 30,
    cost: 280,
    image: "images/logo/restaurants/pizza-hut.jpg?v=2"
  },
  {
    id: 3,
    name: "KFC",
    cuisine: "Burger",
    rating: 4.2,
    deliveryTime: 28,
    cost: 300,
    image: "images/logo/restaurants/kfc.jpg?v=2"
  },
  {
    id: 4,
    name: "Burger King",
    cuisine: "Burger",
    rating: 4.0,
    deliveryTime: 24,
    cost: 220,
    image: "images/logo/restaurants/burger-king.jpg?v=2"
  },
  {
    id: 5,
    name: "Haldirams",
    cuisine: "North Indian",
    rating: 4.4,
    deliveryTime: 27,
    cost: 260,
    image: "images/logo/restaurants/haldirams.jpg?v=2"
  },
  {
    id: 6,
    name: "Wow Momo",
    cuisine: "Momos",
    rating: 4.1,
    deliveryTime: 20,
    cost: 180,
    image: "images/logo/restaurants/wow-momo.jpg?v=2"
  },
  {
    id: 7,
    name: "Behrouz Biryani",
    cuisine: "Biryani",
    rating: 4.5,
    deliveryTime: 32,
    cost: 340,
    image: "images/logo/restaurants/behrouz.jpg?v=2"
  },
  {
    id: 8,
    name: "Chinese Wok",
    cuisine: "Chinese",
    rating: 4.0,
    deliveryTime: 26,
    cost: 230,
    image: "images/logo/restaurants/chinese-wok.jpg?v=2"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const restaurantList = document.getElementById("restaurantList");
  const searchInput = document.getElementById("restaurantSearch");
  const cuisineFilter = document.getElementById("cuisineFilter");
  const sortFilter = document.getElementById("sortFilter");

  const initialSearch = getQueryParam("search");
  if (initialSearch && searchInput) searchInput.value = initialSearch;

  function renderRestaurants(data) {
    if (!restaurantList) return;

    if (!data.length) {
      restaurantList.innerHTML = `<p>No restaurants found.</p>`;
      return;
    }

    restaurantList.innerHTML = data.map((restaurant) => `
      <div class="restaurant-list-card">
        <img src="${restaurant.image}" alt="${restaurant.name}">
        <div class="restaurant-list-info">
          <h3>${restaurant.name}</h3>
          <p>${restaurant.cuisine}</p>
          <div class="restaurant-meta">
            <span>⭐ ${restaurant.rating}</span>
            <span>${restaurant.deliveryTime} mins</span>
            <span>₹${restaurant.cost}</span>
          </div>
          <a href="restaurant-details.html?id=${restaurant.id}">View Menu</a>
        </div>
      </div>
    `).join("");
  }

  function applyFilters() {
    let filtered = [...restaurantsData];
    const searchValue = searchInput.value.toLowerCase().trim();
    const cuisineValue = cuisineFilter.value;
    const sortValue = sortFilter.value;

    if (searchValue) {
      filtered = filtered.filter(r =>
        r.name.toLowerCase().includes(searchValue) ||
        r.cuisine.toLowerCase().includes(searchValue)
      );
    }

    if (cuisineValue) {
      filtered = filtered.filter(r => r.cuisine === cuisineValue);
    }

    if (sortValue === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (sortValue === "deliveryTime") {
      filtered.sort((a, b) => a.deliveryTime - b.deliveryTime);
    } else if (sortValue === "costLowHigh") {
      filtered.sort((a, b) => a.cost - b.cost);
    } else if (sortValue === "costHighLow") {
      filtered.sort((a, b) => b.cost - a.cost);
    }

    renderRestaurants(filtered);
  }

  renderRestaurants(restaurantsData);

  searchInput?.addEventListener("input", applyFilters);
  cuisineFilter?.addEventListener("change", applyFilters);
  sortFilter?.addEventListener("change", applyFilters);
});