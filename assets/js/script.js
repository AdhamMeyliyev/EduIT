// Active linkni avtomatik belgilash
const current = location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  if (link.getAttribute("href") === current) {
    link.classList.add("active");
  }
});
