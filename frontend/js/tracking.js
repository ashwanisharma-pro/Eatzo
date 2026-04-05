document.addEventListener("DOMContentLoaded", () => {
  const orderId = getQueryParam("orderId");
  const trackingOrderId = document.getElementById("trackingOrderId");
  const simulateBtn = document.getElementById("simulateTrackingBtn");
  const outForDeliveryStep = document.getElementById("outForDeliveryStep");
  const deliveredStep = document.getElementById("deliveredStep");

  if (orderId && trackingOrderId) {
    trackingOrderId.textContent = `Order #${orderId}`;
  }

  let stage = 2;

  simulateBtn?.addEventListener("click", () => {
    if (stage === 2) {
      outForDeliveryStep.classList.add("active");
      stage = 3;
      showToast("Order is now out for delivery");
    } else if (stage === 3) {
      deliveredStep.classList.add("active");
      stage = 4;
      showToast("Order delivered successfully");
      updateOrderStatus(orderId, "Delivered");
    } else {
      showToast("Order already delivered");
    }
  });
});

function updateOrderStatus(orderId, newStatus) {
  let orders = getFromLocalStorage("eatzo_orders") || [];
  orders = orders.map(order => {
    if (order.id === orderId) {
      return { ...order, status: newStatus };
    }
    return order;
  });
  saveToLocalStorage("eatzo_orders", orders);
}