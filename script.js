const closeIcon = document.createElement("img");

closeIcon.classList.add("close-icon");
closeIcon.src = "images/logotype-images/close-icon.png";

document
  .querySelector(".hamburger-icon")
  .addEventListener("click", function () {
    document.querySelector("nav").classList.add("nav-menu-mobile");
    document.querySelector("nav").appendChild(closeIcon);
    document
      .querySelector(".nav-menu-background")
      .classList.add("background-opacity");
    document
      .querySelector(".nav-menu-background-one")
      .classList.add("background-opacity");
  });

closeIcon.addEventListener("click", function () {
  document.querySelector("nav").classList.remove("nav-menu-mobile");

  document
    .querySelector(".nav-menu-background")
    .classList.remove("background-opacity");
  document
    .querySelector(".nav-menu-background-one")
    .classList.remove("background-opacity");
});
