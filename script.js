document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("mobile-open");
  menu.textContent = open ? "×" : "☰";
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("mobile-open");
    if (menu) menu.textContent = "☰";
  });
});

// Cinematic Scroll Reveal Observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Target elements to animate on scroll
document.querySelectorAll('.service, .step, .about-panel, .contact, .section-head').forEach(el => {
  el.classList.add("reveal-element");
  observer.observe(el);
});