const hamburgerIcon = document.querySelector(".hamburger-icon");
const navMenu = document.querySelector("nav");
const closeIcon = document.createElement("img");

closeIcon.classList.add("close-icon");
closeIcon.src = "images/logotype-images/close-icon.png";

hamburgerIcon.addEventListener("click", function () {
  navMenu.classList.add("nav-menu-mobile");
  navMenu.appendChild(closeIcon);
});

closeIcon.addEventListener("click", function () {
  navMenu.classList.remove("nav-menu-mobile");
});
