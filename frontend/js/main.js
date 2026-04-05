document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent("navbar", "components/navbar.html");
  await loadComponent("footer", "components/footer.html");

  setActiveNavLink();
  setupHomeSearch();
});

function setupHomeSearch() {
  const searchBtn = document.getElementById("homeSearchBtn");
  const searchInput = document.getElementById("homeSearchInput");

  if (!searchBtn || !searchInput) return;

  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.trim();
    if (query) {
      window.location.href = `restaurants.html?search=${encodeURIComponent(query)}`;
    } else {
      window.location.href = "restaurants.html";
    }
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchBtn.click();
    }
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}