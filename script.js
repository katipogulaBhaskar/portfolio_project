// JavaScript for Hamburger Menu Toggle
const menuButton = document.querySelector(".btn");
const navRight = document.querySelector(".navRight");

menuButton.addEventListener("click", () => {
  navRight.classList.toggle("open"); // Toggles the visibility
});
