window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu__list"),
    menuItem = document.querySelectorAll(".menu__item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger__active");
    menu.classList.toggle("menu__list--active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger__active");
      menu.classList.toggle("menu__list--active");
    });
  });
});
