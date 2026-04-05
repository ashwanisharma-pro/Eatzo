document.addEventListener("DOMContentLoaded", () => {
  renderOrders();
});

function renderOrders() {
  const ordersContainer = document.getElementById("ordersContainer");
  const orders = getFromLocalStorage("eatzo_orders") || [];

  if (!ordersContainer) return;

  if (orders.length === 0) {
    ordersContainer.innerHTML = `
      <div class="order-card">
        <h3>No orders yet</h3>
        <p style="color:#6b7280; margin-top:10px;">Place your first order from restaurants page.</p>
      </div>
    `;
    return;
  }

  ordersContainer.innerHTML = orders.map(order => `
    <div class="order-card">
      <div class="order-top">
        <div>
          <h3>Order #${order.id}</h3>
          <p>${order.createdAt}</p>
          <p>Total: ₹${order.total}</p>
        </div>
        <div class="order-status ${order.status === 'Delivered' ? 'status-delivered' : 'status-preparing'}">
          ${order.status}
        </div>
      </div>

      <div class="order-items-list">
        ${order.items.map(item => `<p>${item.name} x ${item.qty}</p>`).join("")}
      </div>

      <div class="order-actions">
        <a href="order-tracking.html?orderId=${order.id}" class="primary-action">Track Order</a>
        <a href="restaurants.html">Order Again</a>
      </div>
    </div>
  `).join("");
}