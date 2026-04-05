document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm?.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const phone = document.getElementById("registerPhone").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirmPassword = document.getElementById("registerConfirmPassword").value.trim();

    if (password !== confirmPassword) {
      showToast("Passwords do not match");
      return;
    }

    let users = getFromLocalStorage("eatzo_users") || [];

    const alreadyExists = users.some((user) => user.email === email);
    if (alreadyExists) {
      showToast("User already exists with this email");
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      phone,
      password,
      city: "",
      address: ""
    };

    users.push(newUser);

    saveToLocalStorage("eatzo_users", users);
    saveToLocalStorage("eatzo_logged_in_user", newUser);

    showToast("Registration successful");
    window.location.href = "profile.html";
  });
});