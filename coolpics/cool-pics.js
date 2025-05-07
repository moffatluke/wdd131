// Simple toggle for mobile nav
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("main-nav");

menuBtn.addEventListener("click", () => {
  nav.style.display = nav.style.display === "block" ? "none" : "block";
});

