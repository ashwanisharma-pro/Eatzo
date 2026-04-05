async function loadComponent(targetId, filePath) {
  try {
    const response = await fetch(filePath);
    const html = await response.text();
    const target = document.getElementById(targetId);
    if (target) target.innerHTML = html;
  } catch (error) {
    console.error(`Error loading component ${filePath}:`, error);
  }
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function formatPrice(price) {
  return `₹${Number(price).toFixed(0)}`;
}

function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

function showToast(message) {
  alert(message);
}