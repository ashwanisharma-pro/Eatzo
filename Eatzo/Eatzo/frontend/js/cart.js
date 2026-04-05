document.addEventListener("DOMContentLoaded", () => {
  renderCart();
});

function renderCart() {
  const cartItemsContainer = document.getElementById("cartItems");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const taxAmount = document.getElementById("taxAmount");
  const cartTotal = document.getElementById("cartTotal");

  let cart = getFromLocalStorage("eatzo_cart") || [];

  if (!cartItemsContainer) return;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="card" style="padding: 30px;">
        <h3>Your cart is empty</h3>
        <p style="color:#6b7280; margin-top:10px;">Add some tasty food first.</p>
      </div>
    `;
    if (cartSubtotal) cartSubtotal.textContent = "₹0";
    if (taxAmount) taxAmount.textContent = "₹0";
    if (cartTotal) cartTotal.textContent = "₹0";
    return;
  }

  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item-card">
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <h3>${item.name}</h3>
        <p>${item.desc || "Delicious food item"}</p>
        <div class="cart-qty-box">
          <button onclick="updateQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button onclick="updateQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="cart-item-price">
        <strong>₹${item.price * item.qty}</strong>
        <button class="remove-btn" onclick="removeItem(${item.id})">Remove</button>
      </div>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  cartSubtotal.textContent = `₹${subtotal}`;
  taxAmount.textContent = `₹${tax}`;
  cartTotal.textContent = `₹${total}`;
}

function updateQty(id, change) {
  let cart = getFromLocalStorage("eatzo_cart") || [];
  const item = cart.find(product => product.id === id);

  if (item) {
    item.qty += change;
    if (item.qty <= 0) {
      cart = cart.filter(product => product.id !== id);
    }
  }

  saveToLocalStorage("eatzo_cart", cart);
  renderCart();
}

function removeItem(id) {
  let cart = getFromLocalStorage("eatzo_cart") || [];
  cart = cart.filter(item => item.id !== id);
  saveToLocalStorage("eatzo_cart", cart);
  renderCart();
}