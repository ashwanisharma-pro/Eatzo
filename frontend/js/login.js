document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    let users = getFromLocalStorage("eatzo_users") || [];

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      showToast("Invalid email or password");
      return;
    }

    saveToLocalStorage("eatzo_logged_in_user", matchedUser);
    showToast("Login successful");
    window.location.href = "profile.html";
  });
});