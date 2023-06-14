const menu = document.querySelector(".menu");
const btn = document.getElementById("openBtn");
const heroTxt = document.getElementById("hero-text");

toggleMenu = () => {
    menu.classList.toggle("open");
    heroTxt.classList.toggle("hero__text");
}
btn.addEventListener("click", () => {
    toggleMenu();
});