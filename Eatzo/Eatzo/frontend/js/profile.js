document.addEventListener("DOMContentLoaded", () => {
  const profileForm = document.getElementById("profileForm");
  const logoutBtn = document.getElementById("logoutBtn");

  loadUserProfile();

  profileForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    saveUserProfile();
  });

  logoutBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("eatzo_logged_in_user");
    showToast("Logged out successfully");
    window.location.href = "login.html";
  });
});

function loadUserProfile() {
  const user = getFromLocalStorage("eatzo_logged_in_user");

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("profileName").value = user.name || "";
  document.getElementById("profileEmail").value = user.email || "";
  document.getElementById("profilePhone").value = user.phone || "";
  document.getElementById("profileCity").value = user.city || "";
  document.getElementById("profileAddress").value = user.address || "";

  document.getElementById("profileDisplayName").textContent = user.name || "User";
  document.getElementById("profileDisplayEmail").textContent = user.email || "No Email";

  const firstLetter = (user.name || "U").charAt(0).toUpperCase();
  document.getElementById("profileAvatar").textContent = firstLetter;

  updateSavedAddress(user.address, user.city);
}

function saveUserProfile() {
  let user = getFromLocalStorage("eatzo_logged_in_user");
  let users = getFromLocalStorage("eatzo_users") || [];

  if (!user) return;

  user.name = document.getElementById("profileName").value.trim();
  user.email = document.getElementById("profileEmail").value.trim();
  user.phone = document.getElementById("profilePhone").value.trim();
  user.city = document.getElementById("profileCity").value.trim();
  user.address = document.getElementById("profileAddress").value.trim();

  users = users.map((u) => (u.id === user.id ? user : u));

  saveToLocalStorage("eatzo_users", users);
  saveToLocalStorage("eatzo_logged_in_user", user);

  document.getElementById("profileDisplayName").textContent = user.name;
  document.getElementById("profileDisplayEmail").textContent = user.email;
  document.getElementById("profileAvatar").textContent = user.name.charAt(0).toUpperCase();

  updateSavedAddress(user.address, user.city);

  showToast("Profile updated successfully");
}

function updateSavedAddress(address, city) {
  const savedAddressBox = document.getElementById("savedAddressBox");

  if (!savedAddressBox) return;

  if (!address && !city) {
    savedAddressBox.innerHTML = `<p>No address saved yet.</p>`;
    return;
  }

  savedAddressBox.innerHTML = `
    <h4>Default Delivery Address</h4>
    <p>${address || ""}</p>
    <p>${city || ""}</p>
  `;
}