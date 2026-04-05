document.addEventListener("DOMContentLoaded", () => {
  renderCheckoutSummary();

  const checkoutForm = document.getElementById("checkoutForm");
  checkoutForm?.addEventListener("submit", handlePlaceOrder);
});

function renderCheckoutSummary() {
  const checkoutItems = document.getElementById("checkoutItems");
  const checkoutTotal = document.getElementById("checkoutTotal");
  const cart = getFromLocalStorage("eatzo_cart") || [];

  if (!checkoutItems || !checkoutTotal) return;

  if (cart.length === 0) {
    checkoutItems.innerHTML = `<p>Your cart is empty.</p>`;
    checkoutTotal.textContent = "₹0";
    return;
  }

  checkoutItems.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <div>
        <h4>${item.name}</h4>
        <p>Qty: ${item.qty}</p>
      </div>
      <strong>₹${item.price * item.qty}</strong>
    </div>
  `).join("");

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  checkoutTotal.textContent = `₹${total}`;
}

function handlePlaceOrder(e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const addressLine = document.getElementById("addressLine").value.trim();
  const city = document.getElementById("city").value.trim();
  const pincode = document.getElementById("pincode").value.trim();
  const paymentMethod = document.getElementById("paymentMethod").value;

  const cart = getFromLocalStorage("eatzo_cart") || [];

  if (!cart.length) {
    showToast("Your cart is empty");
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const delivery = 40;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + delivery + tax;

  const order = {
    id: "EZ" + Date.now(),
    customer: fullName,
    phone: phoneNumber,
    address: `${addressLine}, ${city} - ${pincode}`,
    paymentMethod,
    items: cart,
    total,
    status: "Preparing",
    createdAt: new Date().toLocaleString()
  };

  let orders = getFromLocalStorage("eatzo_orders") || [];
  orders.unshift(order);

  saveToLocalStorage("eatzo_orders", orders);
  saveToLocalStorage("eatzo_cart", []);

  showToast("Order placed successfully!");
  window.location.href = "orders.html";
}