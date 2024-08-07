const darkmode = document.getElementById("darkModeToggle");
const body = document.getElementsByTagName("body");

document.addEventListener("DOMContentLoaded", (event) => {
  const checkbox = document.getElementById("darkModeToggle");
  checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", checkbox.checked);
  });
});
document.getElementById("menu-icon").addEventListener("click", function () {
  const navMenu = document.getElementById("nav-menu").querySelector("ul");
  if (navMenu.style.display === "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});
