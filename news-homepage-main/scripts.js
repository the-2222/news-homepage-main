const menuBtn = document.getElementById("Hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu() {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
}


