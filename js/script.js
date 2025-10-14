// ketika di klik luar hamburger menu
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarHome.contains(e.target)) {
    navbarHome.classList.remove("active");
  }
});

// slide gambar
const slides = document.querySelectorAll(".slide");
let current = 0;
setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 4000);

// animasi text
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#typing", {
    speed: 100,
    deleteSpeed: 50,
    waitUntilVisible: true,
    loop: true,
  })
    .type("Layanan Percetakan", { delay: 1000 })
    .delete(null, { delay: 500 })
    .type("Digital Printing", { delay: 1000 })
    .delete(null, { delay: 500 })
    .type("Alat Tulis Kantor", { delay: 1000 })
    .delete(null, { delay: 500 })
    .type("Alat Tulis Sekolah", { delay: 1000 })
    .delete(null, { delay: 500 })
    .go();
});

// scrolled animation
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled"); 
  } else {
    navbar.classList.remove("scrolled"); 
  }
});

const menuBtn = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");
const navHome = document.querySelector(".navbar-home");
const overlay = document.querySelector(".overlay");


if (menuBtn && navbar && navHome && overlay) {
  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");    
    navbar.classList.toggle("active");     
    navHome.classList.toggle("active");    
    overlay.classList.toggle("active");    
  });

  overlay.addEventListener("click", () => {
    menuBtn.classList.remove("active");    
    navbar.classList.remove("active");
    navHome.classList.remove("active");
    overlay.classList.remove("active");
  });
}
