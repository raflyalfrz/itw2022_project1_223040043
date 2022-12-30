const menutoggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menutoggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

const li = document.querySelectorAll("a");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let len = sec.length;
  while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
  li.forEach((ltx) => ltx.classList.remove("active"));
  li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);
